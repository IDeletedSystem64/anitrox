module.exports = {

  name: "slap",
  description: "Slaps an user!",
  async execute(client, message, _, footerTxt) {
    const taggedUser = message.mentions.users.first();

    if(!taggedUser) {
      await message.channel.send(client.generateErrorMessage("You need to @mention a user!", message.author.displayAvatarURL()));
    } else {
      await message.channel.send({embed: {
        "title": ":anger: Slap",
        "description": "<@" + taggedUser + "> You have been slapped by <@" + message.author + ">!",
        "color": 9442302,
        "footer": {
          "icon_url": message.author.displayAvatarURL(),
          "text": footerTxt
        },
        "image": {
          "url": "https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943"
        }
      }});
    }      
  }
}
