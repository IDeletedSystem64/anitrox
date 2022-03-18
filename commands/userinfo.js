module.exports = {
  name: "userinfo",
  description: "Gets info about an user, such as ID, Discord Join date and more",
  syntax: "<User>",
  execute(client, message, args) {
    const {footerTxt} = require('../config.json');
    let user = message.mentions.users.first() || args[0]
    if (!user) user = message.author
    const embed = {
      "title": "Everything you've ever wanted to know about " + user.username + "!",
      "color": 9442302,
      "footer": {
        "icon_url": message.author.displayAvatarURL(),
        "text": footerTxt
      },
      
      "thumbnail": {
        "url": user.displayAvatarURL()
      },
      "fields": [
        
        {
          "name": "Username",
          "value": user.username,
          "inline": true
        },
        {
          "name": "Discriminator",
          "value": user.discriminator,
          "inline": true
        },
        {
          "name": "Full Username",
          "value": user.tag,
          "inline": true
        },
        {
          "name": "User Profile Picture",
          "value": user.displayAvatarURL()
        },
        {
          "name": "User Status",
          value: user.presence.status
        },
        {
          "name": "User ID",
          "value": "```" + user.id + "```"
        },
        {
          "name": "User Joined Discord",
          "value": user.createdAt,
          inline: true
        },
      ]
    };
    message.channel.send({ embed: embed });
     }
  }
