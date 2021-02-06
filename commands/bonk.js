module.exports = {

    name: "bonk",
    description: "Bonks an user!",
    execute(client, message, args) {
      const messageAuthor = message.author
      const taggedUser = message.mentions.users.first();
      const errorembed = {
        "title": "<:NyabotError:697145462347661412> Error",
        "color": 13632027,
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
            "title": "<a:SylvBonk:801185845847130113> Bonk",
            "description": "<@" + taggedUser + ">" + " You have been bonked by <@" + messageAuthor + ">!",
            "color": 9442302,
            "footer": {
              "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "Made with ❤ in Illinois | Anitrox © IDeletedSystem64 2018-2021"
            },
            "image": {
              "url": "https://cdn.discordapp.com/attachments/793537380330111028/801194481549312060/HappyBONK.gif"
            }
          }


          message.channel.send({ embed: embed });
            }
    }
