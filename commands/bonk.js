module.exports = {

  name: "bonk",
  description: "Bonks a user!",
  async execute(client, message, _, footerTxt) {
    const taggedUser = message.mentions.users.first();
    
    if(!taggedUser) {
      await message.channel.send(client.generateErrorMessage("You need to @mention a user!", message.author.displayAvatarURL()));
    } else {
      await message.channel.send({embed: {
        "title": "<a:SylvBonk:801185845847130113> Bonk",
        "description": "<@" + taggedUser + ">" + " You have been bonked by <@" + message.author + ">!",
        "color": 9442302,
        "footer": {
          "icon_url": message.author.displayAvatarURL(),
          "text": footerTxt
        },
        "image": {
          "url": "https://cdn.discordapp.com/attachments/793537380330111028/801194481549312060/HappyBONK.gif"
        }
      }});
    }
  }
}
