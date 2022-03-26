const { MessageEmbed } = require("discord.js");

const gifchoices = [
  "https://cdn.discordapp.com/attachments/803658122299572255/803708174293008474/tenor.gif",
  "https://community.gamepress.gg/uploads/default/original/3X/0/a/0a762099c5ad6de9ca5f13dd22a7e45884a99eb3.gif",
  "https://media1.giphy.com/media/ARSp9T7wwxNcs/giphy.gif"
];

module.exports = {

  name: "pat",
  description: "Pats a user!",
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
        "title": "<:pats:801238281286713355> Pat",
        "description": "<@" + taggedUser + "> You have been patted by <@" + messageAuthor + ">!",
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
