console.log('Preparing to start!')
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const os = require("os");
const version = "build 465";
const release = "anitrox_ptb"
const activities_list = [
	"with np!help",
	"Where am I?",
	"with Sylveons!",
	"on my host's hard disk",
	"with Sophie",
	"HAAAAAAAAPPPPPPPYYYYYYYYYYYYYYYYYYYY",
	"Running on " + process.platform + " / " + os.version() + "!",
	"with the tea machine",
	"with Borked Computers",
	"on Sophie's main PC- wait shoot she's coming",
	"btw I use Debian linux",
	"Watching you",
	"Running " + release + " Version " + version,
	"in Incognito Mode- wait what",
	"uwu",
	"Team Fortress 2 with Sophie",
	"videos on Hulu",
	"American Truck Simulator",
	"with my users!",
	"with Sophies skirt"
];

console.log('Starting! This should only take a moment.')
const client = new Discord.Client();
client.commands = new Discord.Collection();
const footicon = "https://cdn.discordapp.com/attachments/803658122299572255/805506708352008232/system64.png"
const footer = "Made with ❤ in Illinois | Anitrox © 2018-2021 IDeletedSystem64"

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));

client.once('ready', () => {
	console.log('    ___          _ __                 ');
	console.log('   /   |  ____  (_) /__________  _  __');
	console.log('  / /| | / __ \/ / __/ ___/ __ \| |/_/');
	console.log(' / ___ |/ / / / / /_/ /  / /_/ />  <  ');
	console.log('/_/  |_/_/ /_/_/\__/_/   \____/_/|_|  ')

	console.log('All Systems Go. | Anitrox (C) 2021 IDeletedSystem64.');
});
setInterval(() => {
	const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
	client.user.setActivity(activities_list[index]);
}, 20000);

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(client, message, args);
	} catch (error) {
		console.error
		const embed = {
			"title": "<:NyabotError:697145462347661412> **Well that happened...**",
			"color": 13632027,
			"footer": {
			  "icon_url": "https://cdn.discordapp.com/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
			  "text": "Anitrox © IDeletedSystem64 2018-2021 All Rights Reserved."
			},
			"fields": [
			  {
				"name": "**What Happened?**",
				"value": "The command you tried to run failed to execute due to an error."
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
