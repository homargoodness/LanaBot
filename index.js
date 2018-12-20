const Discord = require('discord.js');
const config = require('/resrouces/config.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`bot running...Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (!msg.content.startsWith('!')) return;

  if(msg.content === "!randomGame") {
    msg.reply(config.games[Math.floor(Math.random() * Math.floor(config.games.length))]);
  }
});



client.login(config.token);