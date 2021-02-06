module.exports = {

    name: "lick",
    description: "Licks an user!",
    execute(client, message, args) {
      const messageAuthor = message.author
      const taggedUser = message.mentions.users.first();
//---------------------------------------------------
 // --------------------------------------
 const gifchoices = [
  "https://cdn.discordapp.com/attachments/803658122299572255/805314244123951114/cef569820773b0f5d54ee34cfa18e1f8.gif",
  "https://cdn.lowgif.com/full/2027501b8fa5225c-.gif",
  "https://i.gifer.com/36Nx.gif",
  "https://media.tenor.com/images/e8bbe712a5f36bbe9545930894b08bf9/tenor.gif"
  

];
const index = Math.floor(Math.random() * (gifchoices.length - 1) + 1);
var gif = (gifchoices[index]);
// ---------------------------------------    
//---------------------------------------------------
const errorembed = {
  "title": "<:NyabotError:697145462347661412> Error",
  "color": 9442302,
  "footer": {
    "icon_url": "https://images-ext-2.discordapp.net/external/-qaO3jaZLojhEnjrHiKABdXD7gLWqFvdUqHdskNGWhE/https/media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
    "text": "Made with ❤ in Illinois | Anitrox © 2018-2021 IDeletedSystem64"
  },
  "fields": [
    {
      "name": "Well that happened...",
      "value": "You need to @mention an user!"
    }
  ]
};

if(!taggedUser) {
  return message.channel.send({ embed: errorembed});
// Checks if a user was mentioned. If not, returns error message.
}

      const embed = {
            "title": "<a:LeafeonLick:806396195089154058> Lick",
            "description": "<@" + taggedUser + "> You have been licked by <@" + messageAuthor + ">!",
            "color": 8311585,
            "footer": {
              "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "Made with ❤ in Illinois | Anitrox © IDeletedSystem64 2018-2021"
            },
            "image": {
              "url": "https://cdn.discordapp.com/attachments/803658122299572255/805314244123951114/cef569820773b0f5d54ee34cfa18e1f8.gif"
            }
          }


          message.channel.send({ embed: embed });
            }
    }
