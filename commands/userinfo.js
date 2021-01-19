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