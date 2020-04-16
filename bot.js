const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on("ready", () => {
  console.log("You got bamboozled!");
  
});

client.on("message", (message) => {
  
   if (!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
      if(message.content.startsWith(prefix + "server")) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
});

 
client.login(process.env.BOT_TOKEN);
