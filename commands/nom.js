const gifchoices = [
  "https://i.imgur.com/Ns1RBzX.gif",
  "https://cdn.lowgif.com/full/2027501b8fa5225c-.gif",
  "https://i.gifer.com/36Nx.gif",
  "https://media.tenor.com/images/e8bbe712a5f36bbe9545930894b08bf9/tenor.gif"
];

module.exports = {

  name: "nom",
  description: "Noms an user!",
  async execute(_0, message, _1, footer) {
    const taggedUser = message.mentions.users.first(); 

    if(!taggedUser) {
      await message.channel.send({embed: {
        "title": "<:AnitroxError:809651936563429416> Error",
        "color": 9442302,
        "footer": footer,
        "fields": [
          {
            "name": "Well that happened...",
            "value": "You need to @mention an user!"
          }
        ]
      }});
    } else {
      const gif = gifchoices[Math.floor(Math.random() * gifchoices.length)];
      await message.channel.send({embed: {
        "title": "<:BlobNomBlob:801241117919805510> Nom",
        "description": "<@" + taggedUser + "> You have been nommed by <@" + messageAuthor + ">!",
        "color": 8311585,
        "footer": footer,
        "image": {
          "url": gif
        }
      }});
    }
  }
}
