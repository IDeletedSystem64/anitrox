const { User } = require("discord.js");


module.exports = {
	
	name: 'userinfo',
	description: 'Shows information about you or another user.',
	execute(client, message, args) {
    const taggedUser = message.mentions.users.first();
    

    //Actual code
    const embed = {
            "title": "<:userinfo:793885335498522685> **User Information**",
            "description": "Everything you've ever wanted to know about **" + taggedUser.username + ("!**"),
            "color": 11038194,
            
            "footer": {
              "icon_url": "https://cdn.discordapp.com/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "Anitrox © IDeletedSystem64 2018-2021. All Rights Reserved"
            },
            "thumbnail": {
              "url": taggedUser.displayAvatarURL({ dynamic: true })
            },
            "fields": [
              {
                "name": "<:userquestion:793984046912110633> **Full Username**",
                "value": taggedUser.username + ("#") + taggedUser.discriminator
              },
              {
                "name": "<:userquestion:793984046912110633> User Status",
                "value": taggedUser.status,
                "value": taggedUser.presence
              },
              {
                "name": "<:userquestion:793984046912110633> User ID",
                "value": taggedUser.id
              },
              {
                "name": "<:userquestion:793984046912110633> User Joined Discord",
                "value": taggedUser.CreatedAt,
                "inline": true
              },
              {
                "name": "<:userquestion:793984046912110633> User Joined Server",
                "value": "tba",
                "inline": true
              }
            ]
          };
          message.channel.send({ embed });
        }
      };
=======
  name: "userinfo",
  description: "Gets info about an user, such as ID, Discord Join date and more.",
  execute(client, message, args) {

    const taggedUser = message.mentions.users.first();
    const embed = {
      "title": "Everything you've ever wanted to know about " + taggedUser.username + "!",
      "color": 172544,
      "footer": {
        "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
        "text": "Made with ❤ in Illinois | Anitrox © 2018-2021 IDeletedSystem64"
      },
      
      "thumbnail": {
        "url": "https://cdn.discordapp.com/embed/avatars/0.png"
      },
      "fields": [
        {
          "name": "Full Username",
          "value": taggedUser.tag
        },
        {
          "name": "User ID",
          "value": "``" + taggedUser.id + "``"
        },
        {
          "name": "User Joined Discord",
          "value": "This will be added in a future release",
          inline: true
        },
       
      ]
    };
    message.channel.send({ embed: embed });         
          }
  }

