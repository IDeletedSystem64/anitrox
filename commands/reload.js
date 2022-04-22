module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Reloads a command',
  options: [],

  async parseMessage (client, config, message, args) {
    await message.channel.send(this.handle(client, config, message.author, args.split(' ')));
  },

  // TODO: figure out variable input (again)
  async parseInteraction (client, config, interaction) {
    await interaction.reply(this.handle(client, config, interaction.user));
  },

  handle (client, config, user, args) {
    if (user.id === config.ownerID) {
      if (!args) return client.generateErrorMessage('You forgot to provide anything to reload, you pillock', user.displayAvatarURL());
      let returnMessage = '';

      args.forEach(async (arg) => {
        const commandName = arg.toLowerCase();
        const command = client.commands.get(commandName) ||
          client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) {
          returnMessage += `There is no command with name or alias \`${commandName}\`\n`;
        } else {
          delete require.cache[require.resolve(`./${command.name}.js`)];

          try {
            const newCommand = require(`./${command.name}.js`);
            client.commands.set(newCommand.name, newCommand);
            returnMessage += `Successfully reloaded \`${commandName}\`\n`;
            console.log(`User reloaded ${command.name}.`);
          } catch (error) {
            console.error(error);
            returnMessage += `There was an error while reloading \`${command.name}\`\n`;
          }
        }
      });

      return returnMessage;
    } else {
      return {
        embeds: [{
          title: '<:AnitroxDenied:809651936642203668> **403 Forbidden**',
          color: 13632027,
          footer: {
            icon_url: user.displayAvatarURL(),
            text: config.footerTxt
          },
          fields: [
            {
              name: '**What Happened?**',
              value: "You don't have the appropriate permissions to run this command!"
            }
          ]
        }]
      };
    }
  }
};
