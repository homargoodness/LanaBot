const Discord = require('discord.js');
const { token } = require('./resources/env.json');
const client = new Discord.Client();
const fs = require('fs');

let games = [];

fs.readFile('./resources/config.json', (err, data) => {
  if (err) console.log('Error reading config file');
  games = JSON.parse(data).games;
  console.log('Config file loaded');
});

client.on('ready', () => {
  console.log(`bot running...Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (!msg.content.startsWith('!')) return;

  if(msg.content === "!game") {
    msg.reply(games[Math.floor(Math.random() * Math.floor(games.length))]);
  }
});



client.login(token);
