module.exports = {
    name: "avatar",
    description: "Gets a users avatar.",
    execute(client, message, args) {
    const user = message.mentions.users.first()

    const embed = {
        "title": ":frame_photo: " + user.username + "'s Avatar",
        "description": "Here is " +  user.username + "'s avatar!",
        "color": 9442302,
        "footer": {
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
          "text": "Made with <3 in Illinois | Anitrox (C) 2018-2021 IDeletedSystem64"
        },
        "image": {
          "url": user.displayAvatarURL()
        }
      };
      message.channel.send({ embed });
    }
}
