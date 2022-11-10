const { Constants } = require('discord.js');

module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Reloads a command',
  options: [...Array(10).keys()].map(i => ({
    name: `option${i + 0}`,
    description: 'Another option',
    required: i === 0,
    type: Constants.ApplicationCommandOptionTypes.STRING
  })),

  async parseInteraction (client, config, interaction) {
    await interaction.reply(this.handle(client, config, interaction.user, [...Array(10).keys()].map(i => interaction.options.getString(`option${i + 1}`)).filter(str => str)));
  },

  handle (client, config, user, args) {
    if (user.id === process.env.OWNERID) {
      if (!args.length) return client.generateErrorMessage('You forgot to provide anything to reload, you pillock', user.displayAvatarURL());
      let returnMessage = '';

      args.forEach(async (arg) => {
        const commandName = arg?.toLowerCase();
        const command = client.commands.get(commandName);

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
      console.error(`[SYSTEM] [ERR] User ${user.username} tried to reload ${args[0]}, but doesn't have permission!`);
      return client.generateErrorMessage("You don't have permission to run this command.", user.displayAvatarURL());
    }
  }
};
