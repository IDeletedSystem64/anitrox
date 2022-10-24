const { Constants } = require('discord.js');

const gifchoices = [
  'https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif',
  'https://media1.tenor.com/images/6d73b0a9cadef5310be4b6160d2f959a/tenor.gif?itemid=12099823',
  'https://media.tenor.com/images/2636cf3c8152631b4630bf71757a4afa/tenor.gif',
  'https://i.imgur.com/JiFpT5E.gif'
];

module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Cuddle a user!',
  options: [{
    name: 'user',
    description: 'The user to cuddle',
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
        title: ':heart: Cuddle',
        description: `${target} You have been cuddled by ${user}!`,
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
