const { ApplicationCommandOptionType } = require('discord.js');

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
    type: ApplicationCommandOptionType.String
  }],

  async parseInteraction (client, config, interaction) {
    await interaction.reply(this.handle(client, config, interaction.user, interaction.options.getUser('user')));
  },

  handle (client, config, user, target) {
    if (!target) return client.generateErrorMessage('You need to @mention a user!', user.displayAvatarURL());

    const gif = gifchoices[Math.floor(Math.random() * gifchoices.length)];
    return {
      embeds: [{
        title: '<a:ABlobCatHuggle:801232248035999784> Hug',
        description: `${target} You have been hugged by ${user}!`,
        color: 8311585,
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
