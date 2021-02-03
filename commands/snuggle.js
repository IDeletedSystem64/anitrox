module.exports = {

    name: "snuggle",
    description: "Snuggle an user!",
    execute(client, message, args) {
      const messageAuthor = message.author
      const taggedUser = message.mentions.users.first();
      
      // --------------------------------------
      const gifchoices = [
        "https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif",
        "https://media1.tenor.com/images/6d73b0a9cadef5310be4b6160d2f959a/tenor.gif?itemid=12099823",
        "https://media.tenor.com/images/2636cf3c8152631b4630bf71757a4afa/tenor.gif",
        "https://i.imgur.com/JiFpT5E.gif"
      ];
      const index = Math.floor(Math.random() * (gifchoices.length - 1) + 1);
      var gif = (gifchoices[index]);
      // ---------------------------------------

      const embed = {
            "title": ":heart: Cuddle",
            "description": "<@" + taggedUser + ">" + " You have been cuddled by " + "<@" + messageAuthor + ">!",
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
