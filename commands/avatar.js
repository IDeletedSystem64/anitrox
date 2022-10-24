const { Constants } = require('discord.js');

module.exports = {

  name: require('path').parse(__filename).name,
  description: "Gets a user's avatar.",
  options: [{
    name: 'user',
    description: 'Another user',
    required: false,
    type: Constants.ApplicationCommandOptionTypes.USER
  },
  {
    name: 'userid',
    description: "Another user's ID",
    required: false,
    type: Constants.ApplicationCommandOptionTypes.STRING
  }],

  async parseInteraction (client, config, interaction) {
    const target = interaction.options.getUser('user') || client.users.cache.get(interaction.options.getString('userid')) || interaction.user;
    await interaction.reply(this.handle(client, config, interaction.user, target));
  },

  handle (_, config, user, target) {
    return {
      embeds: [{
        title: `:frame_photo: ${target.username}'s Beautiful Avatar!`,
        color: 9442302,
        footer: {
          icon_url: user.displayAvatarURL(),
          text: config.footerTxt
        },
        image: {
          url: target.displayAvatarURL()
        }
      }]
    };
  }
};
