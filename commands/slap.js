const { MessageEmbed } = require("discord.js");

module.exports = {

  name: "slap",
  description: "Slaps an user!",
  async execute(_0, message, _1, footerTxt) {
    const taggedUser = message.mentions.users.first();

    if(!taggedUser) {
      await message.channel.send(new MessageEmbed({
        "title": "<:AnitroxError:809651936563429416> Error",
        "color": 13632027,
        "footer": {
          "icon_url": message.author.displayAvatarURL(),
          "text": footerTxt
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
        "title": ":anger: Slap",
        "description": "<@" + taggedUser + "> You have been slapped by <@" + messageAuthor + ">!",
        "color": 9442302,
        "footer": {
          "icon_url": message.author.displayAvatarURL(),
          "text": footerTxt
        },
        "image": {
          "url": "https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943"
        }
      }));
    }      
  }
}
