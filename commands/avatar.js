module.exports = {
    name: "avatar",
    description: "Gets a users avatar.",
    execute(client, message, args) {
      user = message.mentions.users.first()
      if (!user) user = message.author

    const {footerTxt} = require('../config.json');

    const embed = {
        "title": ":frame_photo: " + user.username + "'s Beautiful Avatar!",
        "color": 9442302,
        "footer": {
          "icon_url": message.author.displayAvatarURL(),
          "text": footerTxt
        },
        "image": {
          "url": user.displayAvatarURL()
        }
      };
      message.channel.send({ embed });
    }
}
