const { GuildMember } = require("discord.js");

module.exports = {
    name: 'setnick',
    description: 'Sets your nickname',
    execute(client, message, args, Discord) {
    
    if (message.channel.permissionsFor(message.author).has("CHANGE_NICKNAME")) {
    var newnick = args.slice(0).join(" ")

    try {
    const successembed = {
        "title": "<:AnitroxSuccess:809651936819019796> Nickname Changed",
        "color": 9442302,
        "footer": {
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
          "text": "Made with ❤ in Illinois | Anitrox © 2018-2021 IDeletedSystem64"
        },
        "fields": [
          {
            "name": "Changed nickname successfully!",
            "value": "You need to have permission ``CHANGE_NICKNAME`` to change your nick!"
          },
          {
            "name": "New Nickname",
            "value": newnick,
            "inline": true
          }
        ]
      };
      message.member.setNickname(newnick, "Nickname change requested by the server member. If you don't want users to be able to change their nickname disable 'CHANGE_NICKNAME' via Change Nickname in Roles.")
    } catch (error) {
        const failembed = {
            "title": "<:AnitroxDenied:809651936642203668> Well that happened...",
            "color": 13632027,
            "footer": {
              "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
              "text": "Made with ❤ in Illinois | Anitrox © 2018-2021 IDeletedSystem64"
            },
            "fields": [
              {
                "name": "Failed to set nickname",
                "value": "You need to have permission ``CHANGE_NICKNAME`` to change your nick!"
              }
            ]
          };
          message.channel.send({ failembed });
    };
}}}