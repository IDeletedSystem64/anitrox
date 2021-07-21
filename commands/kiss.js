module.exports = {

    name: "kiss",
    description: "Kisses an user!",
    execute(client, message, args) {
      const messageAuthor = message.author
      const taggedUser = message.mentions.users.first();
      

       // --------------------------------------
       const gifchoices = [
        "https://cdn.discordapp.com/attachments/803658122299572255/807671954055626812/kiss5.gif",
        "https://cdn.discordapp.com/attachments/803658122299572255/807671956236140554/kiss2.gif",
        "https://cdn.discordapp.com/attachments/803658122299572255/807671964599713862/kiss1.gif",
        "https://cdn.discordapp.com/attachments/803658122299572255/807671971168387082/kiss4.gif",
        "https://cdn.discordapp.com/attachments/803658122299572255/807672017217781840/kiss3.gif"
      ];
      const index = Math.floor(Math.random() * (gifchoices.length - 1) + 1);
      var gif = (gifchoices[index]);
      // ---------------------------------------    
      const errorembed = {
        "title": "<:AnitroxError:809651936563429416> Error",
        "color": 13632027,
        "footer": {
          "icon_url": "https://images-ext-2.discordapp.net/external/-qaO3jaZLojhEnjrHiKABdXD7gLWqFvdUqHdskNGWhE/https/media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
          "text": "Made with ❤ in Illinois | Anitrox by IDeletedSystem64"
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
      }
      
    if(!taggedUser) {
      return message.channel.send({ embed: errorembed});
    // Checks if a user was mentioned. If not, returns error message.
    }
      const embed = {
            "title": ":heart: Kiss",
            "description": "<@" + taggedUser + ">" + ", You have been kissed by <@" + messageAuthor + ">!",
            "color": 9442302,
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
