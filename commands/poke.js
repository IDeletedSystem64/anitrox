module.exports = {

    name: "poke",
    description: "Pokes an user!",
    execute(client, message, args) {
      const messageAuthor = message.author
      const taggedUser = message.mentions.users.first();
         
      // --------------------------------------
      const gifchoices = [
        "https://i.pinimg.com/originals/b4/95/fb/b495fb19f4b9a1b04f48297b676c497b.gif",
        "https://i.imgur.com/H7Ok5tn.gif",
        "https://media1.tenor.com/images/8fe23ec8e2c5e44964e5c11983ff6f41/tenor.gif?itemid=5600215"
        

      ];
      const index = Math.floor(Math.random() * (gifchoices.length - 1) + 2);
      var gif = (gifchoices[index]);
      // ---------------------------------------    
      const errorembed = {
        "title": "<:AnitroxError:809651936563429416> Error",
        "color": 9442302,
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
      // Checks if a user was mentioned. If not, returns error message.
      }
      
      const embed = {
            "title": "👉 Poke!",
            "description": "<@" + taggedUser + "> You have been poked by <@" + messageAuthor + ">!",
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
