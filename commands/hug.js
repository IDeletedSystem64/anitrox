module.exports = {

    name: "hug",
    description: "Hugs an user!",
    execute(client, message, args) {
      const {footerTxt} = require('../config.json');
      const taggedUser = message.mentions.users.first();
      const gifchoices = [
        "https://cdn.discordapp.com/attachments/803658122299572255/807670647920001044/hug2.gif",
        "https://cdn.discordapp.com/attachments/803658122299572255/807670797983285268/hug1.gif",
        "https://cdn.discordapp.com/attachments/803658122299572255/807670951113392178/gif6.gif",
        "https://cdn.discordapp.com/attachments/803658122299572255/808834617494208532/gif3new.gif",
        "https://cdn.discordapp.com/attachments/803658122299572255/807671126376972308/gif4.gif"
      ];
     //---------------------------------
     const errorembed = {
      "title": "<:AnitroxError:809651936563429416> Error",
      "color": 9442302,
      "footer": {
        "icon_url": message.author.displayAvatarURL(),
        "text": message.author.displayAvatarURL()
      },
      "fields": [
        {
          "name": "Well that happened...",
          "value": "You need to @mention an user!"
        }
      ]
    };
   
    if(!taggedUser) {
      return message.channel.send({ embed: errorembed});
    // Checks if a user was mentioned. If not, returns error message.
    }
    
      const index = Math.floor(Math.random() * (gifchoices.length - 1) + 0.4);
      var gif = (gifchoices[index]);    
      const embed = {
            "title": "<a:ABlobCatHuggle:801232248035999784> Hug",
            "description": "<@" + taggedUser + ">" + " You have been hugged by " + "<@" + message.author + ">!",
            "color": 8311585,
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
