module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Gets bot ping',
  options: [],

  async parseInteraction (client, config, interaction) {
    await interaction.reply(await this.handle(client, config, interaction.user));
  },

  async handle (client, config, user) {
    const index = Math.floor(Math.random() * config.locations.length);
    const location = config.locations[index];

    return {
      embeds: [{
        title: ':ping_pong: Ping',
        description: `**Pong!** We pinged **${location}** and got ${client.ws.ping} ms.`,
        color: 9442302,
        footer: {
          icon_url: user.displayAvatarURL(),
          text: config.footerTxt
        }
      }]
    };
  }
};
