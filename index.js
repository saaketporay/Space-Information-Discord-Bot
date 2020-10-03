const Discord = require('discord.js');
const config = require('./config.json');
const fetch = require('node-fetch');


const client = new Discord.Client();



client.once('ready', () => {
    console.log('Space Information Bot is online!');
});

client.on('message', async msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }

    else if (msg.content === 'apod') {
        let getApod = async () => {

            let result = await fetch
            ('https://api.nasa.gov/planetary/apod?api_key=jZ7JIaKjGCMnOlPwqFryi0cfXaenexyWAJPXePcb')

            let json = await result.json()
            return json
        }

        let apodValue = await getApod();
        msg.reply("The Link is : " + apodValue.hdurl)
    }
});


client.login(config.token);
