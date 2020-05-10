const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Zalogowano jako ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjkwNTEzMDc1OTkxNzQwNDU2.XrfRoA.6gAHnjhVwDxSFg_RJdXbcoiQb38');