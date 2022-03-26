const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'opensource',
    description: 'Attributions to open source components used by Anitrox',
    async execute(_0, message, _1, footerTxt){
    await message.channel.send(new MessageEmbed({
      "title": "Component Attribution",
      "description": "Some parts of Anitrox are using open source code, and their attributions are avaliable here!",
      "color": 52508,
      "footer": {
        "icon_url": message.author.displayAvatarURL(),
        "text": footerTxt
      },
      "thumbnail": {
        "url": "https://cdn.discordapp.com/attachments/803658122299572255/838854256471703602/793885335498522685.png"
      },
      "fields": [
        {
          "name": "Discord.JS",
          "value": "[Check out the Discord.JS project on GitHub](https://github.com/discordjs/discord.js/)"
        },
        {
          "name": "The Anitrox Project",
          "value": "[Check out Anitrox on GitHub](https://github.com/IDeletedSystem64/anitrox)"
        },
        {
          "name": "You",
          "value": "Using and supporting the Anitrox Project, thank you! ❤"
        }
      ]
    }));
  }
}