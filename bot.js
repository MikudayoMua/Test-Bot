const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'รักหยวน') {
    	message.reply('ผมก็รักคุณ');
  	}
});

bot.on('ready', function() {
    console.log(bot.user.username);
});

bot.on('message', function() {
    if (message.content === "$loop") { 
      var interval = setInterval (function () {
        message.channel.send("มาคุยกับ@Mikudayo! Muaหรือชวนพี่เข้าเล่นเกมได้นะคับพี่เขาขี้เหงา")
      }, 1 * 1000); 
    }
});

client.login(process.env.BOT_TOKEN);
