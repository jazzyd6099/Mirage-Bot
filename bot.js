const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";
const talkedRecently = new Set();

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

var output = x[Math.floor(Math.random()*x.length)];

var fortunes = [
    "Yes.",
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definelty.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now...",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good...",
    "Very doubtful.",
];
var loots = [ 'A Med Kit!',
	       'A Mozambique!', 
	       'Syringe!', 
	       'A Shield Cell!',
	       'A Shield Battery!',
	       'Light Ammo!',
	       'Heavy Ammo!',
	       'Energy Ammo!',
	       'Sniper Ammo!',
	       'Shotgun Ammo!',
	       'An R-99!',
	       'A Havoc!',
	       'A Charge Rifle!',
	       'A Peacekeeper!',
	       'An EVA-8 Auto!',
	       'A Wingman!',
	       'A Spitfire!',
	       'A Hemlok!',
	       'An R-301!',
	       'A Prowler SMG!',
	       'A G7 Scout!',
	       'A Flatline!',
	       'A Longbow!',
	       'A Sentinel!',
	       'A Triple Take!',
	        'A RE-45!',
	        'A P2020!',
	       'Nothing! :(',
	    ];

client.on("ready", () => {
  console.log("You got bamboozled!");
  
	client.user.setActivity("Eating Porkchops"); 
       client.user.setPresence({ activity: { name: 'Eating Porkchops' }, status: 'online' })
  .then(console.log)
  .catch(console.error);
});
client.on('guildMemberAdd', member => {
  
	const channel = member.guild.channels.cache.find(channel => channel.name === "general");
	if(!channel) return;
	
	channel.send(`Hey kids! ${member} just joined! Give them a warm welcome for me. Or not, it's cool. I can just give them a high five later or whatever,`)
  });
client.on("message", (message) => {
	
	  if (talkedRecently.has(message.author.id)) {
    message.channel.send("Calm down! You're spamming me. 20 seconds." + message.author);
	  } else {
		  talkedRecently.add(message.author.id);
     		   setTimeout(() => {
         	 talkedRecently.delete(message.author.id);
        }, 2000);
	  });
client.on("message", (message) => {	  
    if (message.content.startsWith("Hi Mirage")) {
        message.channel.send("Hello!");
    } else
	    if (message.content.startsWith("Hello Mirage")) {
		    message.channel.send("Hey there kid!");
	    } else
		    if (message.content.startsWith("Hello Mirage!")) {
			    message.channel.send("Hey kid!");
		    } else
			    if (message.content.startsWith("hello mirage")) {
				    message.channel.send("Hey! Wassup?");
   }
});
client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
  
    if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
    } else
		if (message.content.startsWith(prefix + "help")) {
			message.author.send("Hey there! Need help with my commands? Here you go buddy!");
		} else
			if(message.content.startsWith(prefix + "do you love me")) {
				message.reply("of course, I love all my fans!");
			} else
				if(message.content.startsWith(prefix + "can i hold your hand")) {
					message.reply("I don't know how Tae is gonna react to you asking that! :sweat_smile:");
				} else
					if (message.content.startsWith(prefix+"loot")) {
						message.channel.send({embed: {
							color: embedOrange,
							title: "**You went looting at a nearby supply bin and found..**",
							description: (loots[Math.floor(Math.random() * loots.length)]),
						}});
					} else
					if(message.content.startsWith(prefix + "roll")) {
						message.channel.send({embed: {
								     color: embedOrange,
						   	             title: "Ah yes, you rolled a..",
							             description: Math.floor(Math.random() * 6) + 1,
							}});
					}else
						if(message.content.startsWith(prefix + "8ball")) {
							  message.channel.send({embed: {
            		        color: embedPurple,
            		        title: "Looking into the ball...",
                  		description: (fortunes[Math.floor(Math.random() * fortunes.length)]),
								                   }});
						} else
							if(message.content.startsWith(prefix + "coinflip")) {
								      var coinflip = ['Heads!','Tails!'];
     						 message.channel.send({embed: {
							 color: embedOrange,
							 title: "Coin going up! It falls! What side is it?",
							 description: (coinflip[Math.floor(Math.random () * coinflip.length)]),
						 }});
							}
								
	});
client.on('message', message => {
	    if(message.content.includes("Need help with my commands? Here you go buddy!")) {
		    message.channel.send({embed: {
			    color: embedOrange,
			    title: "My Commands",
			    description: "There will be more to come! Just wait, i'm gonna be sooo cool!",
			    thumbnail: {
				    url: "https://i.postimg.cc/P53V3vPc/EMl-Hv-Qh-UUAAXJl-N.jpg"
			    },
			    fields: [{
				    name: "**Fun**",
				    value: "!roll, !8ball(make sure to ask a question!), !coinflip"
			    },
			   {
				     name: "**Cryptage/Interactions**",
				     value: "!do you love me, !can i hold your hand"
			   },
			    {
				     name: "**Other**",
				    value: "WIP!"
			    }
				  ],
			    	 }});
	    } else
		    if(message.content.includes("!can I hold your hand")) {
			    message.reply("I don't know how Tae is gonna react to you asking that! :sweat_smile:");
       }
});

 
client.login(process.env.BOT_TOKEN);
