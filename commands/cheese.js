module.exports = {
//a
    name: "cheese",
    description: "Cheese an user, or run just ``n!cheese`` for a surprise :eyes:",
    execute(client, message, args) {
      const messageAuthor = message.author
      const taggedUser = message.mentions.users.first();
     //---------------------------------

   
    if(!taggedUser) {
      return message.channel.send("*slams cheese on desk* Cheese. https://www.youtube.com/watch?v=Or4IE8fkpn4");
  
    }
    
          
      const embed = {
            "title": ":cheese: Cheesed",
            "description": "<@" + taggedUser + ">" + " You got cheesed by " + "<@" + messageAuthor + ">!",
            "color": 16312092,
            "footer": {
              "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "Made with ❤ in Illinois | Anitrox © IDeletedSystem64 2018-2021"
            },
            "image": {
              "url": "https://cdn.discordapp.com/attachments/803658122299572255/812867714368536636/R06325af354168febcafd96b8328b7590.png"
            }
          }


          message.channel.send({ embed: embed });
            }
    }
