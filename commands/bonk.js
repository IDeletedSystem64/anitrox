const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Bonks a user!',
  options: [{
    name: 'user',
    description: 'The user to bonk',
    required: true,
    type: ApplicationCommandOptionType.User
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
        title: '<a:SylvBonk:801185845847130113> Bonk',
        description: `${target} You have been bonked by ${user}!`,
        color: 9442302,
        footer: {
          icon_url: user.displayAvatarURL(),
          text: config.footerTxt
        },
        image: {
          url: 'https://cdn.discordapp.com/attachments/793537380330111028/801194481549312060/HappyBONK.gif'
        }
      }]
    };
  }
};
