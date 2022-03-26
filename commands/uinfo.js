module.exports = {
  name: "uinfo",
  description: "Gets info about an user, such as ID, Discord Join date and more",
  syntax: "<User>",
  async execute(client, message, args, footer) {
    console.log(args[0])
    const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
    await message.channel.send({embed: {
      "title": "Everything you've ever wanted to know about " + user.username + "!",
      "color": 9442302,
      "footer": footer,
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
          "value": "``" + user.id + "``"
        },
        {
          "name": "User Joined Discord",
          "value": user.createdAt,
          inline: true
        },
      ]
    }});
  }
}
