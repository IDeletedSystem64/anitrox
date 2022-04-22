module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Give some lines of input, and get one back at random',
  options: [],

  async parseMessage (client, config, message, args) {
    let [head, ...options] = message.content.split(/\s*\n\s*/);
    head = head.slice(this.name.length + config.prefix.length);
    if (head) options.push(head);
    await message.channel.send(this.handle(client, config, message.author, options));
  },

  // TODO: Figure out variable input
  async parseInteraction (client, config, interaction) {
    await interaction.reply(this.handle(client, config, interaction.user, interaction.options.getString('question')));
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
