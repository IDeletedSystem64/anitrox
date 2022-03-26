const { MessageEmbed } = require("discord.js");

const gifchoices = [
  "https://cdn.discordapp.com/attachments/803658122299572255/807671954055626812/kiss5.gif",
  "https://cdn.discordapp.com/attachments/803658122299572255/807671956236140554/kiss2.gif",
  "https://cdn.discordapp.com/attachments/803658122299572255/807671964599713862/kiss1.gif",
  "https://cdn.discordapp.com/attachments/803658122299572255/807671971168387082/kiss4.gif",
  "https://cdn.discordapp.com/attachments/803658122299572255/807672017217781840/kiss3.gif"
];

module.exports = {

  name: "kiss",
  description: "Kisses a user!",
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
      const gif = gifchoices[Math.floor(Math.random() * gifchoices.length)];
      await message.channel.send(new MessageEmbed({
        "title": ":heart: Kiss",
        "description": "<@" + taggedUser + ">" + ", You have been kissed by <@" + message.author + ">!",
        "color": 9442302,
        "footer": {
          "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
          "text": "Made with ❤ in Illinois | Anitrox © IDeletedSystem64 2018-2021"
        },
        "image": {
          "url": gif
        }
      }));
    }
  }
}
