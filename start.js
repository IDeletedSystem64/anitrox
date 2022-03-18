console.log("Let's get started")
const fs = require('fs');
const Discord = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js')
const { statuses, build, release, prefix, token, footerTxt } = require('./config.json');
const os = require("os");

console.log('Starting! This should only take a moment.')
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on("error", (e) => console.log("[ERROR]" + error(e)));
client.on("warn", (e) => ("[WARN]" + warn(e)));
// Log errors to console.
client.once('ready', () => {
	console.clear()
	console.log('    ___          _ __                 ');
	console.log('   /   |  ____  (_) /__________  _  __');
	console.log('  / /| | / __ \/ / __/ ___/ __ \| |/_/');
	console.log(' / ___ |/ / / / / /_/ /  / /_/ />  <  ');
	console.log('/_/  |_/_/ /_/_/\__/_/   \____/_/|_|  ')
	console.log(release + ", " + build)
	console.log("All Systems Go. | Anitrox by IDeletedSystem64 | meow meow :3");
});

setInterval(() => {
	const index = Math.floor(Math.random() * (statuses.length - 1) + 1);
	client.user.setActivity(statuses[index]);
}, 20000);
// Picks a status from the config file
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(client, message, args, footerTxt, Discord);
	} catch (error) {
		console.stack
		const usr = message.author;
		const embed = {
			"title": "<:AnitroxError:809651936563429416> **Something went wrong!**",
			"description": error.stack,
			"color": 13632027,
			"footer": {
			  "icon_url": message.author.displayAvatarURL(),
			  "text": footerTxt
			}
		};
		  message.channel.send({ embed });
		  // tries to run the executed command, if fails it will send a error msg with the error stack
	}
});

client.login(token);