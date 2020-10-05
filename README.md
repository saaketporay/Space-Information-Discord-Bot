# Space-Information-Discord-Bot

<img src="https://github.com/saaketporay/Space-Information-Discord-Bot/blob/main/demo.gif" width=1920><br>

NASA International Space Apps Challenge Submission: https://2020.spaceappschallenge.org/challenges/connect/space-exploration-your-backyard/teams/wall-e-2/project
## Summary
It is a Node JS-based automated Discord bot that responds to users who are in the same server as the bot itself. The bot relays formatted interesting information regarding space according to the command that it receives. It does this by parsing through data in real-time with the help of NASA Open API and Launch Library API. The Bot currently has the following functions: It shows and describes the Astronomy Picture Of The Day, it tells the user the latest weather update on Mars as well as the 5 most recent space-craft launches.

## How We Addressed This Challenge
Our project introduces interesting information related to space exploration to the users, when asked, in small cliff note like structure. Our project, "Space Information Bot", does this on the popular application, Discord, which is currently one of the most popular platforms for young organizations.

We believe by having this bot on the server of these organizations, who connect via discord, users can get interesting information like the whether of Mars, the last launches and the Astronomical Picture of the Day from NASA through a single word command. This access to quick information will show them the reach of human space exploration and just how far we have come in this field.

## How We Developed This Project
### ***WHY***
We wanted to establish a quick and easy way of showing the reach of current space exploration amongst the younger audience. We wanted to make the search as easy as possible for interested people and organizations; and also have structured and accurate output for them to look at. Since Discord is by far the most popular platform for virtual groups to meet, we thought making a bot for a discord server would help reach the highest amount of people.

### ***THE TOOLS***
We developed our online discord bot, "Space Information Bot", on the JavaScript Runtime Environment, Node JS.

Along with that, we had the following essential libraries for creating the bot on Discord:

Discord.js
Discord
node-fetch
We then connected our bot to the following APIs to relay data in real-time:

NASA Open APIs:
InSight: Mars Weather Service API ( https://mars.nasa.gov/insight/weather/)
APOD: Astronomy Picture of the Day (https://apod.nasa.gov/apod/astropix.html)
LaunchLibrary API
https://launchlibrary.net/docs/1.3/api.html?ref=apilist.fun

### ***PROBLEMS***
Our biggest issue was making sure the bot was communicating with all the APIs properly since the JSON data that the APIs were returning were structured differently and we had to understand the entire dictionaries that were being returned to parse through the data.

### ***How We Used Space Agency Data in This Project***
We used the NASA Open APIs to receive and parse through the data that we wanted. Additionally we used the API from Launch Library for more information about the latest space craft launches.
