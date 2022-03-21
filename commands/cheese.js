module.exports = {
//a
    name: "cheese",
    description: "Cheese an user, or run just ``n!cheese`` for a surprise :eyes:",
    execute(client, message, args) {
      const taggedUser = message.mentions.users.first();
      const {footerTxt} = require('../config.json');
   
    if(!taggedUser) {
      return message.channel.send("*slams cheese on desk* Cheese. https://www.youtube.com/watch?v=Or4IE8fkpn4");
  
    }
    
          
      const embed = {
            "title": ":cheese: Cheesed",
            "description": "<@" + taggedUser + ">" + " You got cheesed by " + "<@" + message.author + ">!",
            "color": 16312092,
            "footer": {
              "icon_url": message.author.displayAvatarURL(),
              "text": footerTxt
            },
            "image": {
              "url": "https://cdn.discordapp.com/attachments/803658122299572255/812867714368536636/R06325af354168febcafd96b8328b7590.png"
            }
          }


          message.channel.send({ embed: embed });
            }
    }
