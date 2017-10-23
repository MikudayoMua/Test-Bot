const Discord = require('discord.js');
const client = new Discord.Client();
const music = require('discord.js-music');
const YoutubeDL = require('youtube-dl');
const Request = require('request');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'รักหยวน') {
    	message.reply('ผมก็รักคุณ');
  	}
});

client.on('message', function() {
    if (message.content === "$loop") { 
      var interval = setInterval (function () {
        message.channel.send("มาคุยกับ @mikudayo! Mua หรือชวนพี่เค้าเล่นเกมได้นะคับพี่เค้าขี้เหงา ^^")
      }, 1 * 1000); 
    }
});

client.login(process.env.BOT_TOKEN);
