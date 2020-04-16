const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";

//embedColors

const embedRed = 0xff0000
const embedOrange = 0xff790c
const embedYellow = 0xffff00
const embedGreen = 0x00ff00
const embedBlue = 0x0064ff
const embedPurple = 0x6a00b0
const embedMagenta = 0x9600ff
const embedPink = 0xff00ff
const embedBlack = 0x000000
const embedWhite = 0xffffff
const embedGray = 0x777777

var x = [
    1,
    2,
    3,
    4,
    5,
]


client.on("ready", () => {
  console.log("You got bamboozled!");
  
	client.user.setActivity("Porkchops"); 
       client.user.setPresence({ activity: { name: 'Porkchops' }, status: 'online' })
  .then(console.log)
  .catch(console.error);
});
client.on('guildMemberAdd', member => {
  
	const channel = member.guild.channels.cache.find(channel => channel.name === "general");
	if(!channel) return;
	
	channel.send(`Hey kids! ${member} just joined! Give them a warm welcome for me. Or not, it's cool. I can just give them a high five later or something,`)
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
    } else
	if (message.content.startsWith(prefix + "server")) {
	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  }
});

 
client.login(process.env.BOT_TOKEN);
