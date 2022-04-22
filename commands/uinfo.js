const { Constants } = require('discord.js');

module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Gets info about an user, such as ID, Discord Join date and more',
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
    type: Constants.ApplicationCommandOptionTypes.INTEGER
  }],

  async execute (_0, message, _1, config) {
    const user = message.mentions.users.first() || message.member;

    await message.channel.send({
      embeds: [{
        title: `Everything you've ever wanted to know about ${user.user}!`,
        color: 9442302,
        footer: {
          icon_url: message.author.displayAvatarURL(),
          text: config.footerTxt
        },
        thumbnail: {
          url: user.user.displayAvatarURL()
        },
        fields: [
          {
            name: 'Username',
            value: user.user.username,
            inline: true
          },
          {
            name: 'Discriminator',
            value: user.user.discriminator,
            inline: true
          },
          {
            name: 'Full Username',
            value: user.user.tag,
            inline: true
          },
          {
            name: 'User Profile Picture',
            value: user.user.displayAvatarURL()
          },
          {
            name: 'User Status',
            value: user.presence?.status ?? 'Error getting status, does the bot have the GUILD_PRESENCES intent?'
          // IMPORTANT NOTE:
          // There seems to be an issue where offline and invisible users return a null presense
          // I'll try to patch this soon if I can figure out why
          },
          {
            name: 'User ID',
            value: `\`${user.user.id}\``
          },
          {
            name: 'User Joined Discord',
            value: user.user.createdAt.toString(),
            inline: true
          }
        ]
      }]
    });
  }
};
