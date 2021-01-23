module.exports = {

    name: "poke",
    description: "Pokes an user!",
    execute(client, message, args) {
      const messageAuthor = message.author
      const taggedUser = message.mentions.users.first();
          const embed = {
            "title": "👉 Poke!",
            "description": "<@" + taggedUser + "> You have been poked by <@" + messageAuthor + ">!",
            "color": 8311585,
            "footer": {
              "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "Made with ❤ in Illinois | Anitrox © IDeletedSystem64 2018-2021"
            },
            "image": {
              "url": "https://i.gifer.com/4IdP.gif"
            }
          }


          message.channel.send({ embed: embed });
            }
    }
