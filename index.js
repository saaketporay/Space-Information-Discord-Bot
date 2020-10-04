const Discord = require('discord.js'); 
const config = require('./config.json');
const fetch = require('node-fetch');


const client = new Discord.Client();


//checking about the initialization of the bot

client.once('ready', () => {
    console.log('Space Information Bot is online!'); 
    });


//All the commands for the bot 

client.on('message', async msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
    
    
    //Help command of the bot

    if(msg.content === '!help')
    {
        msg.reply('Type !apod for Astronomy Picture Of The Day\nType !wmars for the weather on Mars\nType !launches for the next 5 launches');
    }
    
    

     //Command for NASA's api APOD(Astronomical Picture of the Day)   
    
    if (msg.content === '!apod') 
    {
        let getApod = async () => {

            let result = await fetch
            ('https://api.nasa.gov/planetary/apod?api_key=jZ7JIaKjGCMnOlPwqFryi0cfXaenexyWAJPXePcb')

            let json = await result.json()
            return json
        }
        let apodValue = await getApod();
        msg.reply("Today's date is: " + apodValue.date  + 
        "\n\nTitle: " +apodValue.title + 
        "\n\nWhat is it?: " + apodValue.explanation + 
        "\n\nCopyright: " + apodValue.copyright + "\n\n" +
        apodValue.hdurl);
    }
    
    
    // Command for lastest weather on Mars

    if (msg.content === '!wmars')
    {
        let getMarsData = async () => {

            let result = await fetch
            ('https://api.nasa.gov/insight_weather/?api_key=wLY9MZpynjliPigK4cOJvRt9fHjmpXRM2qHFtnY2&feedtype=json&ver=1.0')

            let json = await result.json()

            return json

        }

        let marsDataVal = await getMarsData();

        let sol = marsDataVal.sol_keys[6];

        let lastestTemp = marsDataVal[sol].AT.av;

        msg.reply("Latest temperature from NASA's InSight Mars Lander at Elysium Planitia: " + lastestTemp + '°C');
    }
    
    
    if(msg.content === '!launches') 
    {
        let getLaunches = async () => {

            let result = await fetch
            ('https://launchlibrary.net/1.3/launch/next/5')

            let json = await result.json()
            return json
    }
    let launchesValue = await getLaunches();
    msg.reply(launchesValue.title);
    }

});


//token for space information bot

client.login(config.token);
