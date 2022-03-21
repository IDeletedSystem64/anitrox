module.exports = {

    name: "pat",
    description: "Pats an user!",
    execute(client, message, args) {
      const {footerTxt} = require('../config.json');
      const taggedUser = message.mentions.users.first();
          
       // --------------------------------------
       const gifchoices = [
        "https://cdn.discordapp.com/attachments/803658122299572255/803708174293008474/tenor.gif",
        "https://community.gamepress.gg/uploads/default/original/3X/0/a/0a762099c5ad6de9ca5f13dd22a7e45884a99eb3.gif",
        "https://media1.giphy.com/media/ARSp9T7wwxNcs/giphy.gif"
        

      ];
      const index = Math.floor(Math.random() * (gifchoices.length - 1) + 2);
      var gif = (gifchoices[index]);
      // ---------------------------------------    
      const errorembed = {
        "title": "<:AnitroxError:809651936563429416> Error",
        "color": 9442302,
        "footer": {
          "icon_url": message.author.displayAvatarURL(),
          "text": footerTxt
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
            "title": "<:pats:801238281286713355> Pat",
            "description": "<@" + taggedUser + "> You have been patted by <@" + messageAuthor + ">!",
            "color": 8311585,
            "footer": {
              "icon_url": message.author.displayAvatarURL(),
              "text": footerTxt
            },
            "image": {
              "url": gif
            }
          }


          message.channel.send({ embed: embed });
            }
    }
