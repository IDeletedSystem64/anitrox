module.exports = {

  name: "avatar",
  description: "Gets a user's avatar.",
  async execute(_0, message, _1, footer) {
    
    const user = message.mentions.users.first() || message.author;

    await message.channel.send({embed: {
      "title": ":frame_photo: " + user.username + "'s Beautiful Avatar!",
      "color": 9442302,
      "footer": footer,
      "image": {
        "url": user.displayAvatarURL()
      }
    }});
  }
}
