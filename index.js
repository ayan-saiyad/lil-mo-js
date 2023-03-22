const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login('MTA4NzIwNzE0ODM1NTg1MDM0MA.GV1Qit.LwKHQzThBA7oU3zA0-2q3OEItsvstD8vIZzly4');
