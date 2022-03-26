module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	args: true,
	async execute(client, message, args, footer) {
		if (message.author.id == 309427567004483586 || message.author.id == 475558313376088064) {
      const commandName = args[0].toLowerCase();
      const command = message.client.commands.get(commandName)
        || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

      if (!command) {
        await message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);
      } else {
        delete require.cache[require.resolve(`./${command.name}.js`)];

        try {
          const newCommand = require(`./${command.name}.js`);
          client.commands.set(newCommand.name, newCommand);
          await message.channel.send(`<:NyabotSuccess:697211376740859914> **Reloaded \`${command.name}\` successfully!**`);
          console.log(`User reloaded ${command.name}.`)
        } catch (error) {
          console.error(error);
          await message.channel.send(`<:AnitroxError:809651936563429416> There was an error while reloading \`${command.name}\`:\n\`${error.message}\``);
        }
      }
    } else {
      message.channel.send({embed: {
        "title": "<:NyabotDenied:697145462565896194> **Access is denied**",
        "color": 13632027,
        "footer": footer,
        "fields": [
          {
          "name": "**What Happened?**",
          "value": "You don't have the appropriate permissions to run this command!"
          }
        ]
      }});
		}
	}
};