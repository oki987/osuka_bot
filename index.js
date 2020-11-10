const Discord = require('discord.js')
const client = new Discord.Client()
require('dotenv-flow').config()

const config = {
    token: process.env.TOKEN,
    owner: process.env.OWNER,
    prefix: process.env.PREFIX
}

const log = console.log;

client.on('ready', () => {

  log(`Zalogowano jako ${client.user.tag}!`)
})

client.on('message', (msg) => {
  const { author, guild } = msg
  //check if user is a bot
  if(author.bot || !guild){
    return
  }
  //ignore message without prefix
  if(msg.content.indexOf(config.prefix) !== 0) return

  const args = msg.content
  .slice(config.prefix.length)
  .trim()
  .split(/ +/g)

const cmd = args.shift().toLowerCase()
  

  if (cmd === 'hej') {
    return msg.reply('siemanko')
  }
});

client.login(config.token)