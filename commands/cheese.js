const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Cheese a user, or run with no arguments for a surprise :eyes:',
  options: [{
    name: 'user',
    description: 'The user to cheese',
    required: false,
    type: ApplicationCommandOptionType.User
  }],

  async parseInteraction (client, config, interaction) {
    await interaction.reply(this.handle(client, config, interaction.user, interaction.options.getUser('user')));
  },

  handle (_, config, user, target) {
    if (!target) return '*slams cheese on desk*\n**Cheese.** https://www.youtube.com/watch?v=Or4IE8fkpn4';

    return {
      embeds: [{
        title: ':cheese: Cheesed',
        description: `${target} You have been cheesed by ${user}!`,
        color: 16312092,
        footer: {
          icon_url: user.displayAvatarURL(),
          text: config.footerTxt
        },
        image: {
          url: 'https://cdn.discordapp.com/attachments/803658122299572255/812867714368536636/R06325af354168febcafd96b8328b7590.png'
        }
      }]
    };
  }
};
