const avatar = require('./avatar');

module.exports = {
  
  name: require('path').parse(__filename).name,
  description: "Bonks a user!",

  async execute(client, message, _, config) {
    const taggedUser = message.mentions.users.first();
    const avatarURL = message.author.displayAvatarURL();
    
    if(!taggedUser) {
      await message.channel.send(client.generateErrorMessage("You need to @mention a user!", avatarURL));
    } else {
      await message.channel.send({embeds: [{
        "title": "<a:SylvBonk:801185845847130113> Bonk",
        "description": `${taggedUser} You have been bonked by ${message.author}!`,
        "color": 9442302,
        "footer": {
          "icon_url": avatarURL,
          "text": config.footerTxt
        },
        "image": {
          "url": "https://cdn.discordapp.com/attachments/793537380330111028/801194481549312060/HappyBONK.gif"
        }
      }]});
    }
  }
}
