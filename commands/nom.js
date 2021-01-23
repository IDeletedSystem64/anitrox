module.exports = {

    name: "nom",
    description: "Noms an user!",
    execute(client, message, args) {
      const messageAuthor = message.author
      const taggedUser = message.mentions.users.first();
          const embed = {
            "title": "<:BlobNomBlob:801241117919805510> Nom",
            "description": "<@" + taggedUser + "> You have been nommed by <@" + messageAuthor + ">!",
            "color": 8311585,
            "footer": {
              "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "Made with ❤ in Illinois | Anitrox © IDeletedSystem64 2018-2021"
            },
            "image": {
              "url": "https://data.whicdn.com/images/279560594/original.gif"
            }
          }


          message.channel.send({ embed: embed });
            }
    }
