const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'setnick',
  description: 'Sets your nickname',
  async execute(_, message, args, footerTxt) {
  
    if (message.channel.permissionsFor(message.author).has("CHANGE_NICKNAME")) {
      const newnick = args.slice(0).join(" ")

      try {
        await message.member.setNickname(newnick, "Nickname change requested by the server member. If you don't want users to be able to change their nickname disable 'CHANGE_NICKNAME' via Change Nickname in Roles.")
        await message.channel.send(new MessageEmbed({
          "title": "<:AnitroxSuccess:809651936819019796> Nickname Changed",
          "color": 9442302,
          "footer": {
            "icon_url": "https://images-ext-2.discordapp.net/external/-qaO3jaZLojhEnjrHiKABdXD7gLWqFvdUqHdskNGWhE/https/media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
            "text": footerTxt
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
        }));
      } catch (error) {
        await message.channel.send(new MessageEmbed({
          "title": "<:AnitroxDenied:809651936642203668> Well that happened...",
          "color": 13632027,
          "footer": {
            "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
            "text": footerTxt
          },
          "fields": [
            {
              "name": "Failed to set nickname",
              "value": "You need to have permission ``CHANGE_NICKNAME`` to change your nick!"
            }
          ]
        }));
      };
    };
  }
}
