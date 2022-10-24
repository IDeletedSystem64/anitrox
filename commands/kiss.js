const { Constants } = require('discord.js');

const gifchoices = [
  'https://cdn.discordapp.com/attachments/803658122299572255/807671954055626812/kiss5.gif',
  'https://cdn.discordapp.com/attachments/803658122299572255/807671956236140554/kiss2.gif',
  'https://cdn.discordapp.com/attachments/803658122299572255/807671964599713862/kiss1.gif',
  'https://cdn.discordapp.com/attachments/803658122299572255/807671971168387082/kiss4.gif',
  'https://cdn.discordapp.com/attachments/803658122299572255/807672017217781840/kiss3.gif'
];

module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Kisses a user!',
  options: [{
    name: 'user',
    description: 'The user to kiss',
    required: true,
    type: Constants.ApplicationCommandOptionTypes.USER
  }],

  async parseInteraction (client, config, interaction) {
    await interaction.reply(this.handle(client, config, interaction.user, interaction.options.getUser('user')));
  },

  handle (client, config, user, target) {
    if (!target) return client.generateErrorMessage('You need to @mention a user!', user.displayAvatarURL());

    const gif = gifchoices[Math.floor(Math.random() * gifchoices.length)];
    return {
      embeds: [{
        title: ':heart: Kiss',
        description: `${target} You have been kissed by ${user}!`,
        color: 9442302,
        footer: {
          icon_url: user.displayAvatarURL(),
          text: config.footerTxt
        },
        image: {
          url: gif
        }
      }]
    };
  }
};
