const {Client, RichEmbed} = require('discord.js')
const client = new Client()
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
  const { author, guild, channel } = msg
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
    msg.reply('siemanko')
  }

  if(cmd === 'info'){
    const botAuthor = "nelsonio"
    const botVersion = "v1.1"
    const botName = "Osuka"
    const botDescription = "Bot dla serwera NelsoN Zation"

    const embed = new RichEmbed()
    // Set the title of the field
    .setTitle(botName)
    // Set the color of the embed
    .setColor(0x349eeb)
    // Set the main content of the embed
    .setDescription(botDescription)
    .addField("Autor", botAuthor, true)
    .addField("Wersja", botVersion, true)

    msg.delete()

  channel.send(embed)
  }
});

client.login(config.token)

// Error handler - omit crashed
client.on("debug", () => {})
client.on("warn", () => {})
client.on("error", () => {})