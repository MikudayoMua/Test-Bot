const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'รักหยวน') {
    msg.reply('ผมก็รักคุณ');
  }
});

client.login('MzcyMDE4NDM1NDkzODU1MjMy.DM_Krw.1U0XSWAwI4FV25K94NtP5jk-y6Y');
