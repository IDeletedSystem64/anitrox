const { MessageEmbed, Message } = require("discord.js");

const gifchoices = [
  "https://cdn.discordapp.com/attachments/803658122299572255/805314244123951114/cef569820773b0f5d54ee34cfa18e1f8.gif",
  "https://cdn.lowgif.com/full/2027501b8fa5225c-.gif",
  "https://i.gifer.com/36Nx.gif",
  "https://media.tenor.com/images/e8bbe712a5f36bbe9545930894b08bf9/tenor.gif"
];

module.exports = {

  name: "lick",
  description: "Licks an user!",
  async execute(_0, message, _1, footer) {
    const taggedUser = message.mentions.users.first();

    if(!taggedUser) {
      await message.channel.send(new MessageEmbed({
        "title": "<:AnitroxError:809651936563429416> Error",
        "color": 9442302,
        "footer": footer,
        "fields": [
          {
            "name": "Well that happened...",
            "value": "You need to @mention an user!"
          }
        ]
      }));
    } else {
      const gif = gifchoices[Math.floor(Math.random() * gifchoices.length)];
      await message.channel.send(new MessageEmbed({
        "title": "<a:LeafeonLick:806396195089154058> Lick",
        "description": "<@" + taggedUser + "> You have been licked by <@" + message.author + ">!",
        "color": 8311585,
        "footer": footer,
        "image": {
          "url": "https://cdn.discordapp.com/attachments/803658122299572255/805314244123951114/cef569820773b0f5d54ee34cfa18e1f8.gif"
        }
      }));
    }
  }
}
