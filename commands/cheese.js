const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "cheese",
  description: "Cheese an user, or run just ``n!cheese`` for a surprise :eyes:",
  async execute(_0, message, _1, footer) {
    const taggedUser = message.mentions.users.first();
    if(!taggedUser) {
      await message.channel.send("*slams cheese on desk* Cheese. https://www.youtube.com/watch?v=Or4IE8fkpn4");
    } else {
      await message.channel.send(new MessageEmbed({
        "title": ":cheese: Cheesed",
        "description": "<@" + taggedUser + ">" + " You got cheesed by " + "<@" + message.author + ">!",
        "color": 16312092,
        "footer": footer,
        "image": {
          "url": "https://cdn.discordapp.com/attachments/803658122299572255/812867714368536636/R06325af354168febcafd96b8328b7590.png"
        }
      }));
    }
  }
}
