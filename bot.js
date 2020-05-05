const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";
const activities = require('./jsons/activity');

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
	       'A Syringe!', 
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
	     'A Level 1 Body Shield!',
	     'A Level 2 Body Shield!',
	     'A Level 3 Body Shield!',
	     'A Level 4 Body Shield!',
	     'An Evo Shield!',
	       'Nothing! :(',
	    ];

client.on("ready", () => {
  console.log("You got bamboozled!");
  
const activity = activities[Math.floor(Math.random() * activities.length)];
client.user.setPresence({ activity: { name: activity.text, type: activity.type }, status: 'online' })
	   .then(console.log)
  .catch(console.error);
});
client.on('guildMemberAdd', member => {
  
	const channel = member.guild.channels.cache.find(channel => channel.name === "general");
	if(!channel) return;
	
	channel.send(`Hey kids! ${member} just joined! Give them a warm welcome for me. Or not, it's cool. I can just give them a high five later or whatever,`)
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
			if (message.content.startsWith(prefix+"nessie")) {
				var embed = new Discord.MessageEmbed()
				.setColor(4484374)
				.setTitle("Look! A nessie appeared!")
				.setImage("https://i.postimg.cc/0QQTfHYf/NESSIE.png")
					message.channel.send({embed})
			} else
			if(message.content.startsWith(prefix + "do you love me")) {
				message.reply("of course, I love all my fans!");
			} else
				if(message.content.startsWith(prefix + "can i hold your hand")) {
					message.reply("I don't know how Tae is gonna react to you asking that! :sweat_smile:");
					} else
						if(message.content.startsWith(prefix+"rr")) {
							 let rr = [
    							  "Boom! 💥 You're dead! Better luck next time buddy.",
   							   "Wow you made it alive.. 😮👏"
								    ];
							var embed = new Discord.MessageEmbed()
								.setTitle("Russian Roulette")
								.setColor(0x000000)
								.setTimestamp()
								.setDescription(rr[Math.floor(Math.random() * rr.length)])
								message.channel.send({embed})
							} else
						if (message.content.startsWith(prefix+"bullylen")) {
							message.channel.send("succ");
						} else
							if (message.content.startsWith(prefix+"love")) {
								let lovedUser = message.mentions.users.first();
					 if(message.mentions.users.size < 1) return message.reply("You forgot to mention someone for me to love! 🙁");
								message.reply("test " + lovedUser);
						} else
					if (message.content.startsWith(prefix+"sexyrate")) {
						const sexyrate = Math.floor(Math.random() * 100)
						var embed = new Discord.MessageEmbed()
						.setColor(0xff790c)
						.addField(" :fire: *Sexy Rate* :fire:  ", "I rate you a " + sexyrate + " out of 100 on the sexy scale!")
            					.setThumbnail(message.author.displayAvatarURL())
     							  message.channel.send({embed})
					} else
					if (message.content.startsWith(prefix+"loot")) {
						message.channel.send({embed: {
							color: embedOrange,
							title: "**You went looting at a nearby supply bin and found..**",
							description: (loots[Math.floor(Math.random() * loots.length)]),
							thumbnail: {
								url: "https://i.postimg.cc/qMXTzfwh/maxresdefault-1.jpg"
							},
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
				    value: "!roll, !8ball(make sure to ask a question!), !coinflip, !loot, !sexyrate, !nessie, !rr"
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
		    if(message.content.includes("That's what Elliott is here for.")) {
			    message.channel.send("Yeah, sorry about Tae! I'm the entertainer if you wish to call me that! I bring the life to the party.");
		    } else
			    		if (message.content.includes("love Mirage")) {
					    message.react('🧡');
					} else
						if (message.content.includes("love mirage")) {
							message.react('🧡');
						} else
							if (message.content.includes("love you mirage")) {
								message.react('🧡');
							} else
								if (message.content.includes("love you Mirage")) {
									message.react('🧡');
								} else
									if (message.content.includes("mirage i love you")) {
										message.react('🧡');
									} else
										if (message.content.includes("and capitalism for the poor")) {
											message.channel.send("lentils");
       }
});

 
client.login(process.env.BOT_TOKEN);
