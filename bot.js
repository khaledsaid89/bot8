const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603571060067139594")
setInterval(function() {
channel.send(`Khaled spam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);