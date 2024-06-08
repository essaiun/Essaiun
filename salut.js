module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "arcano",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("💥 | 𝐬𝐚𝐥𝐮𝐭.. ✌️ n\𝐜𝐨𝐦𝐦𝐞𝐧𝐭 𝐭𝐮 𝐭𝐞 𝐩𝐨𝐫𝐭𝐞𝐬 ?");
}
};
