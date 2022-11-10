module.exports = {

  name: require('path').parse(__filename).name,
  description: "IT'S TIME TO STOP!... the bot",
  options: [],

  async parseInteraction (client, config, interaction) {
    await this.handle(client, config, interaction);
  },

  async handle (client, config, interaction) {
    if (interaction.user.id === process.env.OWNERID) {
      console.log('[SYSTEM] [INFO] ' + `The bot is going down for shut down. Shutdown requested by ${interaction.user.username}`);
      await interaction.reply({
        embeds: [{
          title: 'Shutdown bot',
          description: '<a:AnitroxWorking:997565411212144730> Shutting Down...',
          color: 9442302,
          footer: {
            icon_url: interaction.user.displayAvatarURL(),
            text: config.footerTxt
          }
        }]
      });
      process.exit();
    } else {
      console.error('[SYSTEM] [ERR] User ' + interaction.user.username + " tried to shut down the bot, but doesn't have permission! If this was you, Check your config.json");
      await interaction.reply(client.generateErrorMessage('You do not have permission to run this command.', interaction.user.displayAvatarURL()));
    }
  }
};
