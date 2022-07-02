module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Get help on anything from commands, to what the bot does! just not your homework..',
  options: [],

  async parseMessage (client, config, message) {
    await message.channel.send(this.handle(client, config, message.author));
  },

  async parseInteraction (client, config, interaction) {
    await interaction.reply(this.handle(client, config, interaction.user));
  },

  handle (_, config, user) {
    return {
      embeds: [{
        title: 'HELP! SEYMOUR! THE BOT IS ON FIRE!',
        description: 'Get help on anything from commands, to what the bot does! just not your homework..',
        color: 9442302,
        footer: {
          icon_url: user.displayAvatarURL(),
          text: `${config.footerTxt} | No mother it's just the northern lights`
        },
        fields: [
          {
            name: 'Command List',
            value: '[Click here!](https://github.com/IDeletedSystem64/anitrox/blob/dev/commands.md)'
          },
          {
            name: '...Or is the bot actually on fire?',
            value: 'Join the [support server!](https://discord.gg/grebRGsBZ3)'
          }
        ]
      }]
    };
  }
};
