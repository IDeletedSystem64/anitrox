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
          "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
          "text": "Made with ❤ in Illinois | Anitrox © IDeletedSystem64 2018-2021"
        },
        "image": {
          "url": user.displayAvatarURL()
        }
      };
      message.channel.send({ embed });
    }
}
