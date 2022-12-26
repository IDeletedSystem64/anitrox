const { Constants } = require('discord.js');

module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Slaps a user!',
  options: [{
    name: 'user',
    description: 'The user to slap',
    required: true,
    type: Constants.ApplicationCommandOptionTypes.USER
  }],

  async parseMessage (client, config, message) {
    await message.channel.send(this.handle(client, config, message.author, message.mentions.users.first()));
  },

  async parseInteraction (client, config, interaction) {
    await interaction.reply(this.handle(client, config, interaction.user, interaction.options.getUser('user')));
  },

  handle (client, config, user, target) {
    if (!target) return client.generateErrorMessage('You need to @mention a user!', user.displayAvatarURL());
    return {
      embeds: [{
        title: ':anger: Slap',
        description: `${target} You have been slapped by ${user}!`,
        color: 9442302,
        footer: {
          icon_url: user.displayAvatarURL(),
          text: config.footerTxt
        },
        image: {
          url: 'https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943'
        }
      }]
    };
  }
};
