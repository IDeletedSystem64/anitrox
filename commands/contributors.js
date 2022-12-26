module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Attributions to users who have worked on Anitrox!',
  options: [],

  async parseMessage (_, config, message) {
    await message.channel.send(this.handle(config, message.author));
  },

  async parseInteraction (_, config, interaction) {
    await interaction.reply(this.handle(config, interaction.user));
  },

  handle (config, user) {
    return {
      embeds: [{
        title: 'Contributors',
        description: 'Links to check out our contributors!',
        color: 52508,
        footer: {
          icon_url: user.displayAvatarURL(),
          text: config.footerTxt
        },
        thumbnail: {
          url: 'https://cdn.discordapp.com/emojis/809651812323164192.webp?size=128&quality=lossless'
        },
        fields: [
          {
            name: 'chuu_shi',
            value: 'Thanks to Chuu for letting me use some of his resources to host Anitrox!\n <:GitHub:778165439477841981> [Check out his code!](https://github.com/chuushi)\n <:discord:1057053513210937444> [Check out his Discord community!](https://port.chuu.sh/)'
          },
          {
            name: 'TheCodingGuy',
            value: "Matt has helped quite a bit with Anitrox, especially in the early days of Anitrox's development! He even has his own bot!\n <:GitHub:778165439477841981> [Check out his code!](https://github.com/Aisuruneko)\n :robot: [Check out TheCodingBot!](https://github.com/NetroCorp/TheCodingBot)\n :globe_with_meridians: [Check out Netro Corp!](https://netrocorp.net)"
          },
          {
            name: 'Foxinatel',
            value: 'Foxi has made massive improvements to Anitrox, such as improving error handling, and much more!\n<:GitHub:778165439477841981> [Check out his code!](https://github.com/foxinatel)'
          }
        ]
      }]
    };
  }
};
