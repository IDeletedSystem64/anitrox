const { MessageEmbed } = require("discord.js");

module.exports = {

  name: "bonk",
  description: "Bonks a user!",
  async execute(_0, message, _1, footerTxt) {
    const taggedUser = message.mentions.users.first();
    
    if(!taggedUser) {
      await message.channel.send(new MessageEmbed({
        "title": "<:AnitroxError:809651936563429416> Error",
        "color": 13632027,
        "footer": {
          "icon_url": "https://images-ext-2.discordapp.net/external/-qaO3jaZLojhEnjrHiKABdXD7gLWqFvdUqHdskNGWhE/https/media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
          "text": "Made with ❤ in Illinois | Anitrox by IDeletedSystem64"
        },
        "fields": [
          {
            "name": "Well that happened...",
            "value": "You need to @mention an user!"
          }
        ]
      }));
    } else {
      await message.channel.send(new MessageEmbed({
        "title": "<a:SylvBonk:801185845847130113> Bonk",
        "description": "<@" + taggedUser + ">" + " You have been bonked by <@" + message.author + ">!",
        "color": 9442302,
        "footer": {
          "icon_url": message.author.displayAvatarURL(),
          "text": footerTxt
        },
        "image": {
          "url": "https://cdn.discordapp.com/attachments/793537380330111028/801194481549312060/HappyBONK.gif"
        }
      }));
    }
  }
}
