const { getTime } = global.utils;

module.exports = {
	config: {
		name: "logsbot",
		isBot: true,
		version: "1.4",
		author: "NTKhang",
		envConfig: {
			allow: true
		},
		category: "events"
	},

	langs: {
		vi: {
			title: "====== Nhật ký bot ======",
			added: "\n✅\nSự kiện: bot được thêm vào nhóm mới\n- Người thêm: %1",
			kicked: "\n❌\nSự kiện: bot bị kick\n- Người kick: %1",
			footer: "\n- User ID: %1\n- Nhóm: %2\n- ID nhóm: %3\n- Thời gian: %4"
		},
		en: {
			title: "====== 𝐋𝐄𝐒 𝐍𝐎𝐔𝐕𝐄𝐋𝐋𝐄𝐒 ======",
			added: "\n✅\n𝐃𝐔 𝐍𝐎𝐔𝐕𝐄𝐀𝐔: 𝐋𝐞 𝐁𝐨𝐭 𝐚 𝐞́𝐭𝐞́ 𝐀𝐣𝐨𝐮𝐭𝐞́ 𝐚̀ 𝐮𝐧 𝐍𝐨𝐮𝐯𝐞𝐚𝐮 𝐆𝐫𝐨𝐮𝐩𝐞. \n- 𝐏𝐀𝐑:  %1",
			kicked: "\n❌\n𝐌𝐀𝐔𝐕𝐀𝐈𝐒𝐄 𝐍𝐎𝐔𝐕𝐄𝐋𝐋𝐄: 𝐋𝐞 𝐁𝐨𝐭 𝐯𝐢𝐞𝐧𝐭 𝐝'𝐞̂𝐭𝐫𝐞 𝐄𝐣𝐞𝐜𝐭𝐞́ 𝐝'𝐮𝐧 𝐆𝐫𝐨𝐮𝐩𝐞. \n- 𝐏𝐀𝐑:  %1",
			footer: "\n- 𝐔𝐈𝐃 𝐃𝐄 𝐋'𝐔𝐓𝐈𝐋𝐈𝐒𝐀𝐓𝐄𝐔𝐑: %1\n- 𝐆𝐑𝐎𝐔𝐏𝐄: %2\n- 𝐓𝐈𝐃 𝐃𝐔 𝐆𝐑𝐎𝐔𝐏𝐄: %3\n- 𝐋'𝐇𝐄𝐔𝐑𝐄: %4"
		}
	},

	onStart: async ({ usersData, threadsData, event, api, getLang }) => {
		if (
			(event.logMessageType == "log:subscribe" && event.logMessageData.addedParticipants.some(item => item.userFbId == api.getCurrentUserID()))
			|| (event.logMessageType == "log:unsubscribe" && event.logMessageData.leftParticipantFbId == api.getCurrentUserID())
		) return async function () {
			let msg = getLang("title");
			const { author, threadID } = event;
			if (author == api.getCurrentUserID())
				return;
			let threadName;
			const { config } = global.GoatBot;

			if (event.logMessageType == "log:subscribe") {
				if (!event.logMessageData.addedParticipants.some(item => item.userFbId == api.getCurrentUserID()))
					return;
				threadName = (await api.getThreadInfo(threadID)).threadName;
				const authorName = await usersData.getName(author);
				msg += getLang("added", authorName);
			}
			else if (event.logMessageType == "log:unsubscribe") {
				if (event.logMessageData.leftParticipantFbId != api.getCurrentUserID())
					return;
				const authorName = await usersData.getName(author);
				const threadData = await threadsData.get(threadID);
				threadName = threadData.threadName;
				msg += getLang("kicked", authorName);
			}
			const time = getTime("DD/MM/YYYY HH:mm:ss");
			msg += getLang("footer", author, threadName, threadID, time);

			for (const adminID of config.adminBot)
				api.sendMessage(msg, adminID);
		};
	}
};
