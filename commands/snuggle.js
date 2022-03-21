module.exports = {

  name: "snuggle",
  description: "Snuggle an user!",
  execute(client, message, args) {
    const {footerTxt} = require('../config.json');
    const taggedUser = message.mentions.users.first();
    
    // --------------------------------------
    const gifchoices = [
      "https://media.discordapp.net/attachments/803658122299572255/806775382995894282/anime-couple-snuggle-gif-5.gif?width=450&height=238",
      "https://media.discordapp.net/attachments/803658122299572255/806775411928989726/snuggl1.gif",
      "https://cdn.discordapp.com/attachments/803658122299572255/806775422833786911/ImpureDeepAmbushbug-small.gif"
      
    ];
    const index = Math.floor(Math.random() * (gifchoices.length - 1) + 1);
    var gif = (gifchoices[index]);
    // ---------------------------------------

    const embed = {
          "title": "<:BlobSnuggleCat:806759753450782731> Snuggle",
          "description": "<@" + taggedUser + ">" + " You have been snuggled by " + "<@" + messageAuthor + ">!",
          "color": 9442302,
          "footer": {
            "icon_url": message.author.displayAvatarURL(),
            "text": footerTxt
          },
          "image": {
            "url": gif
          }
        }


        message.channel.send({ embed: embed });
          }
  }