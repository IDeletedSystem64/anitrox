const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "stop",
  description: "Stops the bot",
  async execute(client, message, _, footerTxt) {
    if (message.author.id == 309427567004483586 || message.author.id == 475558313376088064) {
      await message.channel.send(new MessageEmbed({
        "title": "<a:AnitroxWorking:697147309531594843> **Shutting Down...**",
        "description": "See you next time!",
        "color": 9442302,
        "footer": {
          "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
          "text": footerTxt
        }
      }));
      client.destroy();
    } else {
      await message.channel.send(new MessageEmbed({
        "title": ":AnitroxDenied: Access Denied",
        "description": "You need to be the bot owner to execute this command!",
        "color": 13632027,
        "footer": {
          "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
          "text": footerTxt
        }
      }));
    }
  }
}