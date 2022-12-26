const { Constants } = require('discord.js');

module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Get help on anything from commands, to what the bot does! just not your homework..',
  options: [{
    name: 'help',
    description: 'The command you want information on',
    required: false,
    type: Constants.ApplicationCommandOptionTypes.STRING
  }],
  async parseMessage (client, config, message, args) {
    await message.channel.send(this.handle(client, config, message.author, args[0]));
  },

  async parseInteraction (client, config, interaction) {
    await interaction.reply(this.handle(client, config, interaction.user, interaction.options.getString('help')));
  },

  handle (client, config, user, command) {
    if (!command) {
      return {
        embeds: [{
          color: 9442302,
          title: `:question: SEYMOUR! THE ${client.user.username} IS ON FIRE!`,
          description: `Run ${config.prefix}help for more information on each command.`,
          footer: {
            icon_url: user.displayAvatarURL(),
            text: config.footerTxt
          },
          fields: [
            { name: 'Commands', value: client.commands.map(command => command.name).join(', ') }
          ]
        }]
      };
    }

    const cmdName = command;
    const cmd = client.commands.get(cmdName);
    console.log(cmd.options.map);
    if (!cmd) {
      return client.generateErrorMessage(`${cmdName} is not a valid command. Run ${config.prefix}help for a command list!`);
    }
    return {
      embeds: [{
        color: 9442302,
        title: ':question: Command Help',
        description: `Everything you've ever wanted to know about ${cmdName}!`,
        footer: {
          icon_url: user.displayAvatarURL(),
          text: config.footerTxt
        },
        fields: [
          { name: 'Command Name', value: `${cmdName}`, inline: true },
          { name: 'Command Description', value: cmd.description, inline: true },
          { name: 'Command Options', value: cmd.options.map(option => option.name).join('\n') || 'None', inline: true },
          { name: 'Command Option Description', value: cmd.options.map(option => option.description).join('\n') || 'None', inline: true }
          // { name: 'Command Option Required?', value: cmd.options.map(option => option.required) ? 'Yes' : 'No' }
        ]
      }]
    };
  }
};
