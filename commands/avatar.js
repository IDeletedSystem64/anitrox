const { MessageEmbed } = require('discord.js');

module.exports = {
  
  name: "avatar",
  description: "Gets a user's avatar.",
  async execute(_0, message, _1, footerTxt) {
    
    const user = message.mentions.users.first() || message.author;

    await message.channel.send(new MessageEmbed({
      "title": ":frame_photo: " + user.username + "'s Beautiful Avatar!",
      "color": 9442302,
      "footer": {
        "icon_url": message.author.displayAvatarURL(),
        "text": footerTxt
      },
      "image": {
        "url": user.displayAvatarURL()
      }
    }));
  }
}
