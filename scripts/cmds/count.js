module.exports = {
	config: {
		name: "count",
		version: "1.3",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "Xem số lượng tin nhắn của tất cả thành viên hoặc bản thân (tính từ lúc bot vào nhóm)",
			en: "𝑽𝒐𝒊𝒓 𝒍𝒆 𝑵𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝑴𝒆𝒔𝒔𝒂𝒈𝒆 𝒆́𝒄𝒓𝒊𝒕 𝒑𝒂𝒓 𝑻𝒐𝒊 𝒆𝒕 𝒑𝒂𝒓 𝒕𝒐𝒖𝒔 𝒍𝒆𝒔 𝑨𝒖𝒕𝒓𝒆𝒔 𝑴𝒆𝒎𝒃𝒓𝒆𝒔 𝒅𝒆𝒑𝒖𝒊𝒔 𝒒𝒖𝒆 𝒍𝒆 𝑩𝒐𝒕 𝒂 𝒆́𝒕𝒆́ 𝑨𝒋𝒐𝒖𝒕𝒆́ 𝒂𝒖 𝑮𝒓𝒐𝒖𝒑𝒆."
		},
		category: "box chat",
		guide: {
			vi: "   {pn}: dùng để xem số lượng tin nhắn của bạn"
				+ "\n   {pn} @tag: dùng để xem số lượng tin nhắn của những người được tag"
				+ "\n   {pn} all: dùng để xem số lượng tin nhắn của tất cả thành viên",
			en: "    {pn}: 𝑷𝒐𝒖𝒓 𝒗𝒐𝒊𝒓 𝒍𝒆 𝑵𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝑴𝒆𝒔𝒔𝒂𝒈𝒆 𝒆́𝒄𝒓𝒊𝒕 𝒑𝒂𝒓 𝑻𝒐𝒊-𝒎𝒆̂𝒎𝒆."
				+ "\n    {pn} <@𝑵𝒐𝒎 𝒅'𝒖𝒏 𝒖𝒕𝒊𝒍𝒊𝒔𝒂𝒕𝒆𝒖𝒓>:  𝑷𝒐𝒖𝒓 𝒗𝒐𝒊𝒓 𝒍𝒆 𝑵𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝑴𝒆𝒔𝒔𝒂𝒈𝒆 𝒆́𝒄𝒓𝒊𝒕 𝒑𝒂𝒓 𝑳𝒖𝒊."
				+ "\n    {pn} all:   𝑷𝒐𝒖𝒓 𝒗𝒐𝒊𝒓 𝒍𝒆 𝑵𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝑴𝒆𝒔𝒔𝒂𝒈𝒆 𝒆́𝒄𝒓𝒊𝒕 𝒑𝒂𝒓 𝒕𝒐𝒖𝒔 𝒍𝒆𝒔 𝑴𝒆𝒎𝒃𝒓𝒆𝒔."
		}
	},

	langs: {
		vi: {
			count: "Số tin nhắn của các thành viên:",
			endMessage: "Những người không có tên trong danh sách là chưa gửi tin nhắn nào.",
			page: "Trang [%1/%2]",
			reply: "Phản hồi tin nhắn này kèm số trang để xem tiếp",
			result: "%1 hạng %2 với %3 tin nhắn",
			yourResult: "Bạn đứng hạng %1 và đã gửi %2 tin nhắn trong nhóm này",
			invalidPage: "Số trang không hợp lệ"
		},
		en: {
			count: "⚜🌹𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 𝐏𝐀𝐑 𝐌𝐄𝐌𝐁𝐑𝐄🌹⚜",
			endMessage: "𝑪𝒆𝒖𝒙 𝒅𝒐𝒏𝒕 𝒍𝒆 𝑵𝒐𝒎 𝒏𝒆 𝑭𝒊𝒈𝒖𝒓𝒆 𝒔𝒖𝒓 𝒍𝒂 𝑳𝒊𝒔𝒕𝒆 𝒏'𝒐𝒏𝒕 𝒕𝒐𝒖𝒕 𝒃𝒐𝒏𝒏𝒆𝒎𝒆𝒏𝒕 𝑬𝒏𝒗𝒐𝒚𝒆́ 𝑨𝒖𝒄𝒖𝒏 𝑴𝒆𝒔𝒔𝒂𝒈𝒆 𝒅𝒂𝒏𝒔 𝒍𝒆 𝑮𝒓𝒐𝒖𝒑𝒆.",
			page: "𝑷𝒂𝒈𝒆  [%1/%2]",
			reply: "𝑹𝒆́𝒑𝒐𝒏𝒅𝒔 𝒂̀ 𝒄𝒆 𝑴𝒆𝒔𝒔𝒂𝒈𝒆 𝒂𝒗𝒆𝒄 𝒍𝒆 𝑵𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝑷𝒂𝒈𝒆 𝒑𝒐𝒖𝒓 𝒗𝒐𝒊𝒓 𝒑𝒍𝒖𝒔 (𝒍𝒂 𝒑𝒂𝒈𝒆 𝒔𝒖𝒊𝒗𝒂𝒏𝒕𝒆).",
			result: "%1  𝒆𝒔𝒕 𝒂𝒖 𝑹𝒂𝒏𝒈  %2  𝒂𝒗𝒆𝒄  %3  𝑴𝒆𝒔𝒔𝒂𝒈𝒆𝒔 𝒆𝒏𝒗𝒐𝒚𝒆́𝒔 𝒅𝒂𝒏𝒔 𝒍𝒆 𝒈𝒓𝒐𝒖𝒑𝒆✌.",
			yourResult: "⚜🌹.................................. \n \n 𝑻𝒖 𝒆𝒔 𝒂𝒖 𝑹𝒂𝒏𝒈 %1  𝒂𝒗𝒆𝒄  %2  𝑴𝒆𝒔𝒔𝒂𝒈𝒆𝒔 𝒆𝒏𝒗𝒐𝒚𝒆́𝒔 𝒅𝒂𝒏𝒔 𝒍𝒆 𝒈𝒓𝒐𝒖𝒑𝒆 ✌. \n \n ⚜🌹.................................. ",
			invalidPage: "⚜🌹.................................. \n \n𝑵𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝑷𝒂𝒈𝒆 𝑰𝒏𝒗𝒂𝒍𝒊𝒅𝒆 \n \n ⚜🌹.................................. "
		}
	},

	onStart: async function ({ args, threadsData, message, event, api, commandName, getLang }) {
		const { threadID, senderID } = event;
		const threadData = await threadsData.get(threadID);
		const { members } = threadData;
		const usersInGroup = (await api.getThreadInfo(threadID)).participantIDs;
		let arraySort = [];
		for (const user of members) {
			if (!usersInGroup.includes(user.userID))
				continue;
			const charac = ""; // This character is banned from facebook chat (it is not an empty string)
			arraySort.push({
				name: user.name.includes(charac) ? `Uid: ${user.userID}` : user.name,
				count: user.count,
				uid: user.userID
			});
		}
		let stt = 1;
		arraySort.sort((a, b) => b.count - a.count);
		arraySort.map(item => item.stt = stt++);

		if (args[0]) {
			if (args[0].toLowerCase() == "all") {
				let msg = getLang("count");
				const endMessage = getLang("endMessage");
				for (const item of arraySort) {
					if (item.count > 0)
						msg += `\n${item.stt}/ ${item.name}: ${item.count}`;
				}

				if ((msg + endMessage).length > 19999) {
					msg = "";
					let page = parseInt(args[1]);
					if (isNaN(page))
						page = 1;
					const splitPage = global.utils.splitPage(arraySort, 50);
					arraySort = splitPage.allPage[page - 1];
					for (const item of arraySort) {
						if (item.count > 0)
							msg += `\n${item.stt}/ ${item.name}: ${item.count}`;
					}
					msg += getLang("page", page, splitPage.totalPage)
						+ `\n${getLang("reply")}`
						+ `\n\n${endMessage}`;

					return message.reply(msg, (err, info) => {
						if (err)
							return message.err(err);
						global.GoatBot.onReply.set(info.messageID, {
							commandName,
							messageID: info.messageID,
							splitPage,
							author: senderID
						});
					});
				}
				message.reply(msg);
			}
			else if (event.mentions) {
				let msg = "";
				for (const id in event.mentions) {
					const findUser = arraySort.find(item => item.uid == id);
					msg += `\n${getLang("result", findUser.name, findUser.stt, findUser.count)}`;
				}
				message.reply(msg);
			}
		}
		else {
			const findUser = arraySort.find(item => item.uid == senderID);
			return message.reply(getLang("yourResult", findUser.stt, findUser.count));
		}
	},

	onReply: ({ message, event, Reply, commandName, getLang }) => {
		const { senderID, body } = event;
		const { author, splitPage } = Reply;
		if (author != senderID)
			return;
		const page = parseInt(body);
		if (isNaN(page) || page < 1 || page > splitPage.totalPage)
			return message.reply(getLang("invalidPage"));
		let msg = getLang("count");
		const endMessage = getLang("endMessage");
		const arraySort = splitPage.allPage[page - 1];
		for (const item of arraySort) {
			if (item.count > 0)
				msg += `\n${item.stt}/ ${item.name}: ${item.count}`;
		}
		msg += getLang("page", page, splitPage.totalPage)
			+ "\n" + getLang("reply")
			+ "\n\n" + endMessage;
		message.reply(msg, (err, info) => {
			if (err)
				return message.err(err);
			message.unsend(Reply.messageID);
			global.GoatBot.onReply.set(info.messageID, {
				commandName,
				messageID: info.messageID,
				splitPage,
				author: senderID
			});
		});
	},

	onChat: async ({ usersData, threadsData, event }) => {
		const { senderID, threadID } = event;
		const members = await threadsData.get(threadID, "members");
		const findMember = members.find(user => user.userID == senderID);
		if (!findMember) {
			members.push({
				userID: senderID,
				name: await usersData.getName(senderID),
				nickname: null,
				inGroup: true,
				count: 1
			});
		}
		else
			findMember.count += 1;
		await threadsData.set(threadID, members, "members"); 
	}

};
