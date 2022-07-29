module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Restarts the bot',
  options: [],

  async parseMessage (client, config, message) {
    await this.handle(client, config, message.author, message.channel);
  },

  async parseInteraction (client, config, interaction) {
    await this.handle(client, config, interaction.user, interaction.channel);
  },

  async handle (client, config, user, channel) {
    if (user.id === config.ownerID) {
      const embeds = [{
        title: '<a:AnitroxWorking:997565411212144730>  Restart Bot',
        description: 'Restarting Anitrox...',
        color: 9442302,
        footer: {
          icon_url: user.displayAvatarURL(),
          text: config.footerTxt
        }
      }];
      console.log('[SYSTEM] [INFO] Restarting now!');
      const response = await channel.send({ embeds });
      try {
        client.destroy();
        await client.login(config.token);
        console.log('[SYSTEM] [INFO] Restarted successfully!');
        await response.edit({
          embeds: [{
            title: '<a:AnitroxWorking:997565411212144730>  Restart Bot',
            description: 'Restarted!',
            color: 9442302,
            footer: {
              icon_url: user.displayAvatarURL(),
              text: config.footerTxt
            }
          }]
        });
      } catch (e) { console.error(e); }
    } else {
      console.error('[SYSTEM] [ERR] User ' + user.username + " tried to restart the bot, but doesn't have permission! If this was you, Check your config.json");
      await channel.send(client.generateErrorMessage('You do not have permission to run this command.', user.displayAvatarURL()));
    }
  }
};
