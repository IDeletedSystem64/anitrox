const { Constants } = require('discord.js');

module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Ask Anitrox a question, any question! and they will answer it!',
  options: [{
    name: 'question',
    description: 'The question to ask Anitrox',
    required: true,
    type: Constants.ApplicationCommandOptionTypes.STRING
  }],

  async execute (client, message, args, config) {
    const index = Math.floor(Math.random() * config.answers.length);
    const answer = config.answers[index];
    const question = args.slice(0).join(' ');
    const avatarURL = message.author.displayAvatarURL();

    if (!question) {
      await message.channel.send(client.generateErrorMessage('You need to ask a question!', avatarURL));
    } else {
      await message.channel.send({
        embeds: [{
          title: ':8ball: 8Ball',
          description: `Your amazing question: **${question}**`,
          color: 9442302,
          footer: {
            icon_url: avatarURL,
            text: config.footerTxt
          },
          fields: [
            {
              name: 'Answer',
              value: `${answer}`
            }
          ]
        }]
      });
    }
  }
};
