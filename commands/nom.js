const gifchoices = [
  "https://i.imgur.com/Ns1RBzX.gif",
  "https://cdn.lowgif.com/full/2027501b8fa5225c-.gif",
  "https://i.gifer.com/36Nx.gif",
  "https://media.tenor.com/images/e8bbe712a5f36bbe9545930894b08bf9/tenor.gif"
];

module.exports = {

  name: "nom",
  description: "Noms an user!",
  async execute(client, message, _, footerTxt) {
    const taggedUser = message.mentions.users.first(); 

    if(!taggedUser) {
      await message.channel.send(client.generateErrorMessage("You need to @mention a user!", message.author.displayAvatarURL()));
    } else {
      const gif = gifchoices[Math.floor(Math.random() * gifchoices.length)];
      await message.channel.send({embed: {
        "title": "<:BlobNomBlob:801241117919805510> Nom",
        "description": "<@" + taggedUser + "> You have been nommed by <@" + message.author + ">!",
        "color": 8311585,
        "footer": {
          "icon_url": message.author.displayAvatarURL(),
          "text": footerTxt
        },
        "image": {
          "url": gif
        }
      }});
    }
  }
}
