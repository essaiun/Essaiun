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
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𝑺𝒂𝒍𝒖𝒕.. ✌️ \n 𝑪𝒐𝒎𝒎𝒆𝒏𝒕 𝒕𝒖 𝑻𝒆 𝑷𝒐𝒓𝒕𝒆𝒔 ?.. 😎");
}
};
