const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv-flow').config();

const config = {
    token: process.env.TOKEN,
    owner: process.env.OWNER,
    prefix: process.env.PREFIX
}

client.on('ready', () => {
  console.log(`Zalogowano jako ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    return msg.reply('pong');
  }
});

client.login(config.token);