const { Constants } = require('discord.js');

const gifchoices = [
  'https://media.discordapp.net/attachments/803658122299572255/806775382995894282/anime-couple-snuggle-gif-5.gif?width=450&height=238',
  'https://media.discordapp.net/attachments/803658122299572255/806775411928989726/snuggl1.gif',
  'https://cdn.discordapp.com/attachments/803658122299572255/806775422833786911/ImpureDeepAmbushbug-small.gif'
];

module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Snuggle a user!',
  options: [{
    name: 'user',
    description: 'The user to snuggle',
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
        title: '<:BlobSnuggleCat:806759753450782731> Snuggle',
        description: `${target} You have been snuggled by ${user}!`,
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
