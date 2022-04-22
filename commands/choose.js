const { Constants } = require('discord.js');

module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Give some lines of input, and get one back at random',
  options: [...Array(10).keys()].map(i => ({
    name: `option${i + 1}`,
    description: 'Another option',
    required: false,
    type: Constants.ApplicationCommandOptionTypes.STRING
  })),

  async parseMessage (client, config, message, args) {
    let [head, ...options] = message.content.split(/\s*\n\s*/);
    head = head.slice(this.name.length + config.prefix.length);
    if (head) options.push(head);
    await message.channel.send(this.handle(client, config, message.author, options));
  },

  async parseInteraction (client, config, interaction) {
    console.log([...Array(10).keys()].map(i => interaction.options.getString(`option${i + 1}`)).filter(str => str));
    await interaction.reply(this.handle(client, config, interaction.user, [...Array(10).keys()].map(i => interaction.options.getString(`option${i + 1}`)).filter(str => str)));
  },

  handle (client, config, user, options) {
    if (!options.length) return client.generateErrorMessage('You need to provide some input!', user.displayAvatarURL());

    const answer = options[Math.floor(Math.random() * options.length)];
    return {
      embeds: [{
        title: 'I have made my decision:',
        description: answer,
        color: 8311585,
        footer: {
          icon_url: user.displayAvatarURL(),
          text: config.footerTxt
        }
      }]
    };
  }
};
