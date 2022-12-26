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

  async parseMessage (client, config, message, args) {
    const target = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    await message.channel.send(this.handle(client, config, message.author, target));
  },

  async parseInteraction (client, config, interaction) {
    const target = interaction.options.getUser('user') || client.users.cache.get(interaction.options.getString('userid')) || interaction.user;
    await interaction.reply(this.handle(client, config, interaction.user, target));
  },

  handle (_, config, user, target) {
    return {
      embeds: [{
        title: `:frame_photo: ${target.username}'s Beautiful Profile Picture!`,
        description: `[Profile picture link (Mobile users, tap here!)](${target.displayAvatarURL({ dynamic: true })})`,
        color: 9442302,
        image: { url: target.displayAvatarURL({ dynamic: true }) },
        footer: { icon_url: user.displayAvatarURL(), text: config.footerTxt }

      }]
    };
  }
};
