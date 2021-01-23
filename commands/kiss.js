module.exports = {

    name: "kiss",
    description: "Kisses an user!",
    execute(client, message, args) {
      const messageAuthor = message.author
      const taggedUser = message.mentions.users.first();
          const embed = {
            "title": ":heart: Kiss",
            "description": "<@" + taggedUser + ">" + " You have been kissed by <@" + messageAuthor + ">!",
            "color": 8311585,
            "footer": {
              "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "Made with ❤ in Illinois | Anitrox © IDeletedSystem64 2018-2021"
            },
            "image": {
              "url": "https://i.pinimg.com/originals/e3/4e/31/e34e31123f8f35d5c771a2d6a70bef52.gif"
            }
          }


          message.channel.send({ embed: embed });
            }
    }
