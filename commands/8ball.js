const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Ask Anitrox a question, any question! and they will answer it!',
  options: [{
    name: 'question',
    description: 'The question to ask Anitrox',
    required: true,
    type: ApplicationCommandOptionType.String
  }],

  async parseInteraction (client, config, interaction) {
    await interaction.reply(this.handle(client, config, interaction.user, interaction.options.getString('question')));
  },

  handle (client, config, user, question) {
    const index = Math.floor(Math.random() * config.answers.length);
    const answer = config.answers[index];
    const avatarURL = user.displayAvatarURL();

    if (!question) return client.generateErrorMessage('You need to ask a question!', avatarURL);

    return {
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
    };
  }
};
