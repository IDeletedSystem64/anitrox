const { MessageEmbed } = require("discord.js");

const gifchoices = [
  "https://i.pinimg.com/originals/b4/95/fb/b495fb19f4b9a1b04f48297b676c497b.gif",
  "https://i.imgur.com/H7Ok5tn.gif",
  "https://media1.tenor.com/images/8fe23ec8e2c5e44964e5c11983ff6f41/tenor.gif?itemid=5600215"
];

module.exports = {

  name: "poke",
  description: "Pokes an user!",
  async execute(_0, message, _1, footerTxt) {
    const taggedUser = message.mentions.users.first();
    
    if(!taggedUser) {
      await message.channel.send(new MessageEmbed({
        "title": "<:AnitroxError:809651936563429416> Error",
        "color": 9442302,
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
        "title": "👉 Poke!",
        "description": "<@" + taggedUser + "> You have been poked by <@" + message.author + ">!",
        "color": 8311585,
        "footer": {
          "icon_url": message.author.displayAvatarURL(),
          "text": footerTxt
        },
        "image": {
          "url": gif
        }
      }));
    }     
  }
}
