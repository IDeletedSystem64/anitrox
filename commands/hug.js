const gifchoices = [
  "https://cdn.discordapp.com/attachments/803658122299572255/807670647920001044/hug2.gif",
  "https://cdn.discordapp.com/attachments/803658122299572255/807670797983285268/hug1.gif",
  "https://cdn.discordapp.com/attachments/803658122299572255/807670951113392178/gif6.gif",
  "https://cdn.discordapp.com/attachments/803658122299572255/808834617494208532/gif3new.gif",
  "https://cdn.discordapp.com/attachments/803658122299572255/807671126376972308/gif4.gif"
];

module.exports = {

  name: "hug",
  description: "Hugs a user!",
  async execute(client, message, _, footerTxt) {
    const taggedUser = message.mentions.users.first();
  
    if(!taggedUser) {
      await message.channel.send(client.generateErrorMessage("You need to @mention a user!", message.author.displayAvatarURL()));
    } else {
      const gif = gifchoices[Math.floor(Math.random() * gifchoices.length)];
      await message.channel.send({embed: {
        "title": "<a:ABlobCatHuggle:801232248035999784> Hug",
        "description": `${taggedUser} You have been hugged by ${message.author}!`,
        "color": 8311585,
        "footer": {
          "icon_url": message.author.displayAvatarURL(),
          "text": footerTxt
        },
        "image": {
          "url": gif
        }
      }});
    }
  }
}
