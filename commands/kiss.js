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
  async execute(client, message, _, footerTxt) {
    const taggedUser = message.mentions.users.first();
    
    if(!taggedUser) {
      await message.channel.send(client.generateErrorMessage("You need to @mention a user!", message.author.displayAvatarURL()));
    } else {
      const gif = gifchoices[Math.floor(Math.random() * gifchoices.length)];
      await message.channel.send({embed: {
        "title": ":heart: Kiss",
        "description": "<@" + taggedUser + ">" + ", You have been kissed by <@" + message.author + ">!",
        "color": 9442302,
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
