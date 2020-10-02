const Discord = require('discord.js');
const config = require('./config.json');


const client = new Discord.Client();



client.once('ready', () => {
    console.log('Space Information Bot is online!')
})

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
  });


client.login(config.token);