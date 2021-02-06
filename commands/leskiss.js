const { Message } = require("discord.js");
const { execute } = require("./info");

module.exports = {
    
    name: "leskiss",
    description: "Lesbian kiss <:lesbian:803831629428686849>",
    execute(client, message, args) {
        const messageAuthor = message.author
        const taggedUser = message.mentions.users.first();
          // --------------------------------------
       const gifchoices = [
        "https://cdn.discordapp.com/attachments/793537380330111028/803833954750038066/gif5.gif",
        "https://cdn.discordapp.com/attachments/793537380330111028/803833959338475550/gif12.gif",
        "https://cdn.discordapp.com/attachments/793537380330111028/803834034135236628/gif9.gif",
        "https://cdn.discordapp.com/attachments/793537380330111028/803834082034843658/gif18.gif",
        "https://cdn.discordapp.com/attachments/793537380330111028/803834094063583302/gif8.gif",
        "https://cdn.discordapp.com/attachments/793537380330111028/803834099869024296/gif10.gif",
        "https://cdn.discordapp.com/attachments/793537380330111028/803834132035665950/gif16.gif",
        "https://cdn.discordapp.com/attachments/793537380330111028/803834146413084713/gif13.gif",
        "https://cdn.discordapp.com/attachments/793537380330111028/803834249425715210/gif22.gif",
        "https://cdn.discordapp.com/attachments/793537380330111028/803834323898990592/gif11.gif",
        "https://cdn.discordapp.com/attachments/793537380330111028/803834328848793650/gif14.gif",
        "https://cdn.discordapp.com/attachments/793537380330111028/803834391226351676/gif17.gif",
        "https://cdn.discordapp.com/attachments/793537380330111028/803834391226351676/gif17.gif",
        "https://cdn.discordapp.com/attachments/793537380330111028/803834498714304522/gif15.gif",
        "https://cdn.discordapp.com/attachments/793537380330111028/803834514269798460/gif19.gif"

      ];
      const index = Math.floor(Math.random() * (gifchoices.length - 1) + 1.75);
      var gif = (gifchoices[index]);
      // ---------------------------------------    
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
      

      const embed = {
        "title": ":heart: <:lesbian:803831629428686849> Kiss",
        "description": "<@" + taggedUser + ">" + " You have been kissed by <@" + messageAuthor + ">! <:lesbian:803831629428686849>",
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
