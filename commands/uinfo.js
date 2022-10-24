const { Constants } = require('discord.js');

module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Gets info about an user, such as ID, Discord Join date and more',
  options: [{
    name: 'user',
    description: 'Another user',
    required: false,
    type: Constants.ApplicationCommandOptionTypes.USER
  }],

  async parseInteraction (client, config, interaction) {
    const target = interaction.options.getUser('user') ? (await interaction.guild.members.fetch(interaction.options.getUser('user'))) : interaction.member;
    await interaction.reply(this.handle(client, config, interaction.user, target));
  },

  handle (client, config, user, target) {
    return {
      embeds: [{
        title: `Everything you've ever wanted to know about ${target.user.username}!`,
        color: 9442302,
        footer: {
          icon_url: user.displayAvatarURL(),
          text: config.footerTxt
        },
        thumbnail: {
          url: target.displayAvatarURL()
        },
        fields: [
          {
            name: 'Username',
            value: target.user.username,
            inline: true
          },
          {
            name: 'Discriminator',
            value: target.user.discriminator,
            inline: true
          },
          {
            name: 'Full Username',
            value: target.user.tag,
            inline: true
          },
          {
            name: 'User Profile Picture',
            value: target.user.displayAvatarURL()
          },
          {
            name: 'User Status',
            value: target.presence?.status ?? (config.intents.includes('GUILD_PRESENCES') ? 'Offline' : 'Missing GUILD_PRESENCES intent')
          },
          {
            name: 'User ID',
            value: `\`${target.user.id}\``
          },
          {
            name: 'User Joined Discord',
            value: target.user.createdAt.toString(),
            inline: true
          }
        ]
      }]
    };
  }
};
