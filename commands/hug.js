const { Constants } = require('discord.js');

const gifchoices = [
  'https://cdn.discordapp.com/attachments/803658122299572255/807670647920001044/hug2.gif',
  'https://cdn.discordapp.com/attachments/803658122299572255/807670797983285268/hug1.gif',
  'https://cdn.discordapp.com/attachments/803658122299572255/807670951113392178/gif6.gif',
  'https://cdn.discordapp.com/attachments/803658122299572255/808834617494208532/gif3new.gif',
  'https://cdn.discordapp.com/attachments/803658122299572255/807671126376972308/gif4.gif'
];

module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Hugs a user!',
  options: [{
    name: 'user',
    description: 'The user to hug',
    required: true,
    type: Constants.ApplicationCommandOptionTypes.USER
  }],

  async execute (client, message, _, config) {
    const taggedUser = message.mentions.users.first();
    const avatarURL = message.author.displayAvatarURL();

    if (!taggedUser) {
      await message.channel.send(client.generateErrorMessage('You need to @mention a user!', avatarURL));
    } else {
      const gif = gifchoices[Math.floor(Math.random() * gifchoices.length)];
      await message.channel.send({
        embeds: [{
          title: '<a:ABlobCatHuggle:801232248035999784> Hug',
          description: `${taggedUser} You have been hugged by ${message.author}!`,
          color: 8311585,
          footer: {
            icon_url: avatarURL,
            text: config.footerTxt
          },
          image: {
            url: gif
          }
        }]
      });
    }
  }
};
