module.exports = {

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