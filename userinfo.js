module.exports = {

  name: "userinfo",
  description: "Gets info about an user, such as ID, Discord Join date and more.",
  execute(client, message, args) {

   

    
    
    
    const user = message.mentions.users.first();
    var i=0;i<user.presence.activities.length;i
    const activity = user.presence.activities[i];

   


    

    const embed = {
      "title": "Everything you've ever wanted to know about " + user.username + "!",
      "color": 9442302,
      "footer": {
        "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
        "text": "Made with ❤ in Illinois | Anitrox © 2018-2021 IDeletedSystem64"
      },

      "thumbnail": {
        "url": user.displayAvatarURL()
      },
      "fields": [
        {
          "name": "Attention",
          "value": "This command isn't yet finished, More info will be added soon!"
        },
        {
          "name": "Full Username",
          "value": user.tag
        },
        {
          "name": "User Profile Picture",
          "value": user.displayAvatarURL()
        },
        {
          "name": "User Presence",
          value: user.presence.status
        },
        {
          "name": "Custom Status",
           value:  activity.state
        },
        {
          "name": "User ID",
          "value": "``" + user.id + "``"
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
