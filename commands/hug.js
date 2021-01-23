module.exports = {

    name: "hug",
    description: "Hugs an user!",
    execute(client, message, args) {
      const messageAuthor = message.author
      const taggedUser = message.mentions.users.first();
          const embed = {
            "title": "<a:ABlobCatHuggle:801232248035999784> Hug",
            "description": "<@" + taggedUser + ">" + " You have been hugged by " + "<@" + messageAuthor + ">!",
            "color": 8311585,
            "footer": {
              "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "Made with ❤ in Illinois | Anitrox © IDeletedSystem64 2018-2021"
            },
            "image": {
              "url": "https://i.imgur.com/r9aU2xv.gif?noredirect"
            }
          }


          message.channel.send({ embed: embed });
            }
    }
