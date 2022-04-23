module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Add Anitrox to your beautiful server!',
  options: [],

  async parseMessage (client, config, message) {
    await message.channel.send(this.handle(client, config, message.author));
  },

  async parseInteraction (client, config, interaction) {
    await interaction.reply(this.handle(client, config, interaction.user));
  },

  handle (_, config, user) {
    return {
      embeds: [{
        title: 'Add Anitrox to your Server!',
        description: 'Weather you want stable, or that squeaky clean fresh PTB build, we gotchu.',
        color: 9442302,
        footer: {
          icon_url: user.displayAvatarURL(),
          text: config.footerTxt
        },
        thumbnail: {
          url: 'https://cdn.discordapp.com/attachments/803658122299572255/814352905394061322/anitroxaddsrvr.png'
        },
        fields: [
          {
            name: 'Anitrox',
            value: 'Get the ripe off the vine Anitrox! \n [Add Anitrox to your server](https://discord.com/oauth2/authorize?client_id=576805923964715018&scope=bot&permissions=8)'
          },
          {
            name: 'Anitrox PTB (Public Test Build)',
            value: 'So you want the fresh and hot builds straight from the oven? We gotchu \n [Add Anitrox PTB to your server](https://discord.com/oauth2/authorize?client_id=489125054261755925&scope=bot&permissions=66186303)'
          },
          {
            name: 'Need help?',
            value: 'Come join the Anitrox Support Server, for support and much more!\n [Anitrox Support Server](https://discord.gg/grebRGsBZ3)'
          }
        ]
      }]
    };
  }
};
