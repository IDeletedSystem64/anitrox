const gifchoices = [
  "https://media.discordapp.net/attachments/803658122299572255/806775382995894282/anime-couple-snuggle-gif-5.gif?width=450&height=238",
  "https://media.discordapp.net/attachments/803658122299572255/806775411928989726/snuggl1.gif",
  "https://cdn.discordapp.com/attachments/803658122299572255/806775422833786911/ImpureDeepAmbushbug-small.gif"
];


module.exports = {

  name: "snuggle",
  description: "Snuggle an user!",
  async execute(client, message, _, footerTxt) {
    const taggedUser = message.mentions.users.first();
    
    if(!taggedUser) {
      await message.channel.send(client.generateErrorMessage("You need to @mention a user!", message.author.displayAvatarURL()));
    } else {
      const gif = gifchoices[Math.floor(Math.random() * gifchoices.length)];
      await message.channel.send({embed: {
        "title": "<:BlobSnuggleCat:806759753450782731> Snuggle",
        "description": "<@" + taggedUser + ">" + " You have been snuggled by " + "<@" + message.author + ">!",
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