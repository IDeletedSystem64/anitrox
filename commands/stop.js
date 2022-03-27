module.exports = {
  name: "stop",
  description: "Stops the bot",
  async execute(client, message, _, footerTxt) {
    if (message.author.id == 309427567004483586 || message.author.id == 475558313376088064) {
      await message.channel.send({embed: {
        "title": "<a:AnitroxWorking:697147309531594843> **Shutting Down...**",
        "description": "See you next time!",
        "color": 9442302,
        "footer": {
          "icon_url": message.author.displayAvatarURL(),
          "text": footerTxt
        },
      }});
      client.destroy();
    } else {
      await message.channel.send({embed: {
        "title": ":AnitroxDenied: Access Denied",
        "description": "You need to be the bot owner to execute this command!",
        "color": 13632027,
        "footer": {
          "icon_url": message.author.displayAvatarURL(),
          "text": footerTxt
        },
      }});
    }
  }
}