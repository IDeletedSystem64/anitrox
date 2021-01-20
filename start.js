console.log('Preparing to start!')
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const os = require("os")
const version = "Public Test Release 1";
const release = "anitrox_ptb"
const buildno = "430"
console.log('Starting!')
const client = new Discord.Client();
client.commands = new Discord.Collection();
const activities_list = [
	"with n!help",
	"Where am I?",
	"with Sylveons!",
	"on my host's hard disk",
	"with Happy",
	"HAAAAAAAAPPPPPPPYYYYYYYYYYYYYYYYYYYY",
	"Running on " + process.platform + " / " + os.version() + "!",
	"with the tea machine",
	"with Borked Computers",
	"on Happy's main PC- wait shoot she's coming",
	"btw I use Debian linux"
];
	

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e))
client.once('ready', () => {
	console.log('All systems go.');
});
setInterval(() => {
	const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
	client.user.setActivity(activities_list[index]); 
}, 10000); 

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(client, message, args);
	} catch (error) {
		const embed = {
			"title": "<:NyabotError:697145462347661412> ***An error occurred!***",
			"color": 13632027,
			"footer": {
			  "icon_url": "https://cdn.discordapp.com/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
			  "text": "Anitrox © IDeletedSystem64 2018-2021 All Rights Reserved."
			},
			"fields": [
			  {
				"name": "**What Happened?**",
				"value": "The command you tried to run failed to execute"
			  },
			  {
				"name": "Error Info",
				"value": error.message
			  }
			]
		  };
		  message.channel.send({ embed });
	}
});

client.login(token);
