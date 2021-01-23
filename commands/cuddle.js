module.exports = {

    name: "cuddle",
    description: "Cuddle an user!",
    execute(client, message, args) {
      const messageAuthor = message.author
      const taggedUser = message.mentions.users.first();
          const embed = {
            "title": ":heart: Cuddle",
            "description": "<@" + taggedUser + ">" + " You have been cuddled by " + "<@" + messageAuthor + ">!",
            "color": 8311585,
            "footer": {
              "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "Made with ❤ in Illinois | Anitrox © IDeletedSystem64 2018-2021"
            },
            "image": {
              "url": "https://media.tenor.com/images/7199fdd26fc2c07cd49a34fda3fc37a8/tenor.gif"
            }
          }


          message.channel.send({ embed: embed });
            }
    }
