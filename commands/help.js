module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Get help on anything from commands, to what the bot does! just not your homework..',
  options: [{
    name: '<Command>',
    description: 'View Information about this command',
    required: false
  }],
  async parseMessage (client, config, message, args) {
    await message.channel.send(this.handle(client, config, message.author, args));
  },

  async parseInteraction (client, config, interaction) {
    await interaction.reply(this.handle(client, config, interaction.user));
  },

  handle (client, config, user, args) {
    if (!args[0]) {
      return client.generateErrorMessage('Note to self: Design default help embed.', user.displayAvatarURL());
    }

    const cmdName = args[0].toLowerCase();
    const cmd = client.commands.get(cmdName);

    if (!cmd) {
      return client.generateErrorMessage(`${cmdName} is not a valid command! Run ${config.prefix}help for a command list.`);
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
          { name: 'Command Option Description', value: cmd.options.map(option => option.description).join('\n') || 'None', inline: true },
          { name: 'Option Legend', value: '[Option] REQUIRED\n<Option> OPTIONAL' }
        ]
      }]
    };
  }
};
