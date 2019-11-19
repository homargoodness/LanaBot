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

  if (msg.content === '!help') {
    msg.reply('\n!listGames - lists all games and their tags \n!game - selects a random game \n!tags - TBC');
  }

  if (msg.content === "!listGames") {
    let resp = '\n';
    games.forEach(game => {
      resp += `${game.name} ----- tags- `;
      game.tags.forEach(tag => resp += `${tag}, `);
      resp += '\n';
    });
    msg.reply(resp);
  }

  if (msg.content === "!game") {
    msg.reply(games[Math.floor(Math.random() * Math.floor(games.length))].name);
  }

  if (msg.content.includes('!tags')) {
    let resp = '\n';
    let tags = msg.content.replace('!tags', '').split(',').map(t => t.trim());

    games.forEach(game => {
      if (game.tags.some(t => tags.includes(t))) {
        resp += `${game.name} \n`
      }
    });

    if (resp) {
      msg.reply(resp);  
    } else {
      msg.reply('No games found.')
    }
  }
});



client.login(token);
