const Discord = require('discord.js');
const client = new Discord.Client();

const games = [
  'Supreme Commander: Forged Alliance',
  'Supreme Commander 2',
  'Killing Floor 2',
  'Left for Dead 2'
];

console.log('bot running...');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if(msg.content === "!whatGame") {
    msg.reply(games[Math.floor(Math.random() * Math.floor(games.length))]);
  };
});



client.login("OAUTH2_TOKEN");