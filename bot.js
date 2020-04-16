const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";

client.on("ready", () => {
  console.log("You got bamboozled!");
  
	client.user.setActivity("Bamboozling"); 
       client.user.setPresence({ activity: { name: 'Bamboozling' }, status: 'online' })
  .then(console.log)
  .catch(console.error);
});

client.on("message", (message) => {

    if (message.content.startsWith("Hi Mirage")) {
        message.channel.send("Hello!");
   }
});
client.on("message", (message) => {

  if (!message.content.startsWith(prefix)) return;
  
    if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  }
});

 
client.login(process.env.BOT_TOKEN);
