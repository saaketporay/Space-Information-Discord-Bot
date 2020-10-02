const Discord = require('discord.js');
const config = require('./config.json');


const client = new Discord.Client();



client.once('ready', () => {
    console.log('Space Information Bot is online!')
})




client.login(config.token);