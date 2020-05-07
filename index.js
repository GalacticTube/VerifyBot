const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Status: Online');
  client.user.setStatus("dnd");
  setInterval(function(){ client.user.setGame(`${client.guilds.size}/100 guilds`); }, 10000);
});

client.login(process.env.BOT_PREFIX);
