console.log('(Info) Preparing to start!')
const fs = require('fs');
console.log('(Info) Loaded Filesystem successfully!')
const Discord = require('discord.js');
console.log('(Info) Loaded Discord successfully!')
const { build, release, prefix, token } = require('./config.json');
const { denied, error, info, success, warning } = require('./icons.json');
const os = require("os");
console.log('(Info) Loaded OS successfully!')

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
	"Running " + release + " Version " + build,
	"in Incognito Mode- wait what",
	"uwu",
	"Team Fortress 2 with Sophie",
	"videos on Hulu",
	"American Truck Simulator",
	"with my users!",
	"Euro Truck Simulator 2",
	"with a screwdriver",
	"Found new hardware.",
	"@everyone"
];

console.log('Starting! This should only take a moment.')
const client = new Discord.Client();
client.commands = new Discord.Collection();
const footicon = "https://cdn.discordapp.com/attachments/803658122299572255/805506708352008232/system64.png"
const footer = "Made with ❤ in Illinois | Anitrox, by IDeletedSystem64"

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));

client.once('ready', () => {
	console.clear()
	console.log('    ___          _ __                 ');
	console.log('   /   |  ____  (_) /__________  _  __');
	console.log('  / /| | / __ \/ / __/ ___/ __ \| |/_/');
	console.log(' / ___ |/ / / / / /_/ /  / /_/ />  <  ');
	console.log('/_/  |_/_/ /_/_/\__/_/   \____/_/|_|  ')
	console.log(release + ", " + build)
	console.log("All Systems Go. | Anitrox by IDeletedSystem64 | We're now open-source! Check it out at bit.ly/anitroxsource");
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
		client.commands.get(command).execute(client, message, args, Discord);
	} catch (error) {
		console.stack
		const embed = {
			"title": "<:AnitroxError:809651936563429416> **Well that happened...**",
			"color": 13632027,
			"footer": {
			  "icon_url": "https://cdn.discordapp.com/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
			  "text": footer
			},
			"fields": [
			  {
				"name": "**What Happened?**",
				"value": "The command you tried to run failed to execute due to an error."
			  },
			  {
				"name": "Error Info",
				"value": error.stack
			  }
			]
		  };
		  message.channel.send({ embed });
	}
});

client.login(token);
