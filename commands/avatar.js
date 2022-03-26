module.exports = {

  name: "avatar",
  description: "Gets a user's avatar.",
  async execute(client, message, args, footerTxt) {
    
    const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

    await message.channel.send({embed: {
      "title": ":frame_photo: " + user.username + "'s Beautiful Avatar!",
      "color": 9442302,
      "footer": {
        "icon_url": message.author.displayAvatarURL(),
        "text": footerTxt
      },
      "image": {
        "url": user.displayAvatarURL()
      }
    }});
  }
}
