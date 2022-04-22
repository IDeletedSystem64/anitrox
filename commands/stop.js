module.exports = {

  name: require('path').parse(__filename).name,
  description: "IT'S TIME TO STOP!... the bot",
  options: [],

  async parseMessage (client, config, message, args) {
    await message.channel.send(await this.handle(client, config, message.author, args.slice(0).join(' ')));
    process.exit();
  },

  async parseInteraction (client, config, interaction) {
    await interaction.reply(await this.handle(client, config, interaction.user, interaction.options.getString('question')));
    process.exit();
  },

  async handle (_, config, user) {
    if (user.id === config.ownerID) {
      console.log('The bot is shutting down! Bye bye!');
      return {
        embeds: [{
          title: '<a:AnitroxWorking:697147309531594843> **Shutting Down...**',
          description: 'See you next time!',
          color: 9442302,
          footer: {
            icon_url: user.displayAvatarURL(),
            text: config.footerTxt
          }
        }]
      };
    } else {
      return {
        embeds: [{
          title: '<:AnitroxDenied:809651936642203668> 403 Forbidden',
          description: 'You need to be the bot owner to execute this command!',
          color: 13632027,
          footer: {
            icon_url: user.displayAvatarURL(),
            text: config.footerTxt
          }
        }]
      };
    }
  }
};
