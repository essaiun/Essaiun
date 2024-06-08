const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "bye",
		aliases: ["l"],
		version: "1.0",
		author: "Sandy",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('🌹𝐩𝐨𝐮𝐫 𝐮𝐧𝐞 𝐨𝐮 𝐝𝐞𝐮𝐱 𝐫𝐚𝐢𝐬𝐨𝐧𝐬 𝐪𝐮𝐞 𝐩𝐞𝐮𝐭-𝐞𝐭𝐫𝐞 𝐣𝐞 𝐯𝐨𝐮𝐬 𝐝𝐢𝐫𝐚𝐢 𝐬𝐢 𝐯𝐨𝐮𝐬 𝐦𝐞 𝐝𝐞𝐦𝐚𝐧𝐝𝐞𝐳 𝐚𝐟𝐭𝐞𝐫,𝐁𝐘𝐄.. ✌️'  , id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
