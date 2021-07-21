module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	args: true,
	execute(client, message, args, denied) {
		if (message.author.id == 309427567004483586) {
		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);
		}

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`<:NyabotSuccess:697211376740859914> **Reloaded \`${command.name}\` successfully!**`);
			console.log('User reloaded ${command.name}.')
		} catch (error) {
			console.error(error);
			message.channel.send(`<:AnitroxError:809651936563429416> There was an error while reloading \`${command.name}\`:\n\`${error.message}\``);
		} 
	} else {
			const embed = {
				"title": "<:NyabotDenied:697145462565896194> **Access is denied**",
				"color": 13632027,
				"footer": {
				  "icon_url": "https://cdn.discordapp.com/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
				  "text": "Made with ❤ in Illinois | Anitrox by IDeletedSystem64"
				},
				"fields": [
				  {
					"name": "**What Happened?**",
					"value": "You don't have the appropriate permissions to run this command!"
				  }
				]
			  };
			  message.channel.send({ embed });
			}
	},
};