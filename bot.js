const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  } else
    if (message.content.startsWith("Hello Mirage"}} {
        message.channel.send("Hello!");
  }
});

 
client.login(process.env.BOT_TOKEN);
