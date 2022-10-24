module.exports = {

  name: require('path').parse(__filename).name,
  description: "IT'S TIME TO STOP!... the bot",
  options: [],

  async parseInteraction (client, config, interaction) {
    await this.handle(client, config, interaction.user, interaction.channel);
  },

  async handle (client, config, user, channel) {
    if (user.id === process.env.OWNERID) {
      console.log('[SYSTEM] [INFO] ' + `The bot is going down for shut down. \nShutdown requested by ${user.username}`);
      await channel.send({
        embeds: [{
          title: '**Shut down the bot**',
          description: '<a:AnitroxWorking:997565411212144730> **Shutting Down...**',
          color: 9442302,
          footer: {
            icon_url: user.displayAvatarURL(),
            text: config.footerTxt
          }
        }]
      });
      process.exit();
    } else {
      console.error('[SYSTEM] [ERR] User ' + user.username + " tried to shut down the bot, but doesn't have permission! If this was you, Check your config.json");
      await channel.send(client.generateErrorMessage('You do not have permission to run this command.', user.displayAvatarURL()));
    }
  }
};
