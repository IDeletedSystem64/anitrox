
console.log("(Info)" + " Preparing to start!" )
const fs = require('fs');
console.log('(Info) Loaded Filesystem successfully!')
const Discord = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js')
console.log('(Info) Loaded Discord successfully!')
const { build, release, prefix, token } = require('./config.json');
const os = require("os");
console.log('(Info) Loaded OS successfully!')

const activities_list = [
	"with np!help",
	"with Sophie!",
	"Trans Rights!",
	"in your computer",
	"with my internet router",
	"ssh: system64@borkeonv2",
	"YouTube",
	"with source code",
	"Visual Studio Code",
	"Running Anitrox" + build
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

client.on("error", (e) => console.log(Date.now + "[ERROR]" + error(e)));
client.on("warn", (e) => (Date.now + "[WARN]" + warn(e)));
// sends errors/warnings to the hosts console/terminal. crash errors ignore this
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
// does a cool logo thingy on start up
setInterval(() => {
	const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
	client.user.setActivity(activities_list[index]);
}, 20000);
// runs some math to randomly pick a status from activites_list, this may need tuning when statuses are added/removed to make it more random (as it may just land on the current status instead)
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
		  // tries to run the executed command, if fails it will send a error msg with the error stack
	}
});

client.login(token);
