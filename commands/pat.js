module.exports = {

    name: "pat",
    description: "Pats an user!",
    execute(client, message, args) {
      const messageAuthor = message.author
      const taggedUser = message.mentions.users.first();
          const embed = {
            "title": "<:pats:801238281286713355> Pat",
            "description": taggedUser + " You have been patted by " + messageAuthor + "!",
            "color": 8311585,
            "footer": {
              "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "Made with ❤ in Illinois | Anitrox © IDeletedSystem64 2018-2021"
            },
            "image": {
              "url": "https://media1.giphy.com/media/ARSp9T7wwxNcs/giphy.gif"
            }
          }
         
            
          message.channel.send({ embed: embed });             
            }
    }
