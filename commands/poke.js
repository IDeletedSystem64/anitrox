const { ApplicationCommandOptionType } = require('discord.js');

const gifchoices = [
  'https://i.pinimg.com/originals/b4/95/fb/b495fb19f4b9a1b04f48297b676c497b.gif',
  'https://i.imgur.com/H7Ok5tn.gif',
  'https://media1.tenor.com/images/8fe23ec8e2c5e44964e5c11983ff6f41/tenor.gif?itemid=5600215'
];

module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Pokes a user!',
  options: [{
    name: 'user',
    description: 'The user to poke',
    required: true,
    type: ApplicationCommandOptionType.User
  }],

  async parseInteraction (client, config, interaction) {
    await interaction.reply(this.handle(client, config, interaction.user, interaction.options.getUser('user')));
  },

  handle (client, config, user, target) {
    if (!target) return client.generateErrorMessage('You need to @mention a user!', user.displayAvatarURL());

    const gif = gifchoices[Math.floor(Math.random() * gifchoices.length)];
    return {
      embeds: [{
        title: '👉 Poke!',
        description: `${target} You have been poked by ${user}!`,
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
