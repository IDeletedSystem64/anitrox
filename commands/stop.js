module.exports = {

  name: require('path').parse(__filename).name,
  description: "IT'S TIME TO STOP!... the bot",
  
  async execute(_0, message, _1, config) {
    if (message.author.id == config.ownerID) {
      await message.channel.send({embed: {
        "title": "<a:AnitroxWorking:697147309531594843> **Shutting Down...**",
        "description": "See you next time!",
        "color": 9442302,
        "footer": {
          "icon_url": message.author.displayAvatarURL(),
          "text": config.footerTxt
        },
      }});
      console.log("The bot is shutting down! Bye bye!")
      process.exit();
    } else {
      await message.channel.send({embed: {
        "title": "<:AnitroxDenied:809651936642203668> 403 Forbidden",
        "description": "You need to be the bot owner to execute this command!",
        "color": 13632027,
        "footer": {
          "icon_url": message.author.displayAvatarURL(),
          "text": config.footerTxt
        },
      }});
    }
  }
}