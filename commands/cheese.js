const { Constants } = require('discord.js');

module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Cheese a user, or run with no arguments for a surprise :eyes:',
  options: [{
    name: 'user',
    description: 'The user to cheese',
    required: false,
    type: Constants.ApplicationCommandOptionTypes.USER
  }],

  async execute (_0, message, _1, config) {
    const taggedUser = message.mentions.users.first();

    if (!taggedUser) {
      await message.channel.send('*slams cheese on desk*\n**Cheese.** https://www.youtube.com/watch?v=Or4IE8fkpn4');
    } else {
      await message.channel.send({
        embeds: [{
          title: ':cheese: Cheesed',
          description: `${taggedUser} You have been cheesed by ${message.author}!`,
          color: 16312092,
          footer: {
            icon_url: message.author.displayAvatarURL(),
            text: config.footerTxt
          },
          image: {
            url: 'https://cdn.discordapp.com/attachments/803658122299572255/812867714368536636/R06325af354168febcafd96b8328b7590.png'
          }
        }]
      });
    }
  }
};
