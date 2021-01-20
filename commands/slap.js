module.exports = {

    name: "slap",
    description: "Slaps an user!",
    execute(client, message, args) {
      const messageAuthor = message.author
      const taggedUser = message.mentions.users.first();
          const embed = {
            "title": ":anger: Slap",
            "description": taggedUser + " You have been slapped by " + messageAuthor + "!",
            "color": 8311585,
            "footer": {
              "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "Made with ❤ in Illinois | Anitrox © IDeletedSystem64 2018-2021"
            },
            "image": {
              "url": "https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943"
            }
          }
         
            
          message.channel.send({ embed: embed });             
            }
    }
