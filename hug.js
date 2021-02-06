module.exports = {

    name: "hug",
    description: "Hugs an user!",
    execute(client, message, args) {
      const messageAuthor = message.author
      const taggedUser = message.mentions.users.first();
      const gifchoices = [
        "https://cdn.discordapp.com/attachments/803658122299572255/807670647920001044/hug2.gif",
        "https://cdn.discordapp.com/attachments/803658122299572255/807670797983285268/hug1.gif",
        "https://cdn.discordapp.com/attachments/803658122299572255/807670951113392178/gif6.gif",
        "https://cdn.discordapp.com/attachments/803658122299572255/807670972965453824/hug3.gif",
        "https://cdn.discordapp.com/attachments/803658122299572255/807671126376972308/gif4.gif"
      ];
     //---------------------------------
     const errorembed = {
      "title": "<:NyabotError:697145462347661412> Error",
      "color": 9442302,
      "footer": {
        "icon_url": "https://images-ext-2.discordapp.net/external/-qaO3jaZLojhEnjrHiKABdXD7gLWqFvdUqHdskNGWhE/https/media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
        "text": "Made with ❤ in Illinois | Anitrox © 2018-2021 IDeletedSystem64"
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
    
      const index = Math.floor(Math.random() * (gifchoices.length - 1) + 2);
      var gif = (gifchoices[index]);    
      const embed = {
            "title": "<a:ABlobCatHuggle:801232248035999784> Hug",
            "description": "<@" + taggedUser + ">" + " You have been hugged by " + "<@" + messageAuthor + ">!",
            "color": 8311585,
            "footer": {
              "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "Made with ❤ in Illinois | Anitrox © IDeletedSystem64 2018-2021"
            },
            "image": {
              "url": gif
            }
          }


          message.channel.send({ embed: embed });
            }
    }
