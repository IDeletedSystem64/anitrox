const { ApplicationCommandOptionType } = require('discord.js');
const { inspect } = require('util');

module.exports = {

  name: require('path').parse(__filename).name,
  description: 'handles JS code',
  options: [{
    name: 'code',
    description: 'The string to evaluate',
    required: true,
    type: ApplicationCommandOptionType.String
  }],

  async parseMessage (client, config, message, args) {
    await message.channel.send(this.handle(client, config, message.author, args.join(' ')));
  },

  async parseInteraction (client, config, interaction) {
    await interaction.reply(this.handle(client, config, interaction.user, interaction.options.getString('code')));
  },

  handle (client, config, user, code) {
    if (user.id === process.env.OWNERID) {
      try {
        const evaled = inspect(eval(code));
        // await message.channel.send(evaled, { code: 'xl' });
        return `\`\`\`js\n${evaled}\n\`\`\``;
      } catch (error) {
        return {
          embeds: [{
            title: '<:AnitroxError:809651936563429416> **Something went wrong! **',
            color: 13632027,
            footer: {
              icon_url: user.displayAvatarURL(),
              text: config.footerTxt
            },
            fields: [
              {
                name: '**What Happened?**',
                value: 'The command you tried to run failed to handle due to an error.'
              },
              {
                name: 'Error Info',
                value: error.message
              }
            ]
          }]
        };
      }
    };
  }
};
