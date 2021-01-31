module.exports = {

    name: "hug",
    description: "Hugs an user!",
    execute(client, message, args) {
      const messageAuthor = message.author
      const taggedUser = message.mentions.users.first();
      const gifchoices = [
        "https://media1.tenor.com/images/684efd91473dcfab34cb78bf16d211cf/tenor.gif?itemid=14495459",
        "https://cdn.lowgif.com/medium/d26c65f2d66be540-merriberri-graphic-arts-services-requests.gif",
        "https://cdn.lowgif.com/full/91e3f30773596637-.gif",
        "https://thumbs.gfycat.com/WealthyWastefulBluemorphobutterfly-size_restricted.gif",
        "https://data.whicdn.com/images/294164107/original.gif",
        "https://media1.tenor.com/images/e5e7779385d003db13396e03b7fd1024/tenor.gif?itemid=16619907"
      ];
     //---------------------------------
     const errorembed = {
      "title": "<:NyabotError:697145462347661412> Error",
      "color": 13632027,
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
    
      const index = Math.floor(Math.random() * (gifchoices.length - 1) + 2);
      var gif = (gifchoices[index]);    
      const embed = {
            "title": "<a:ABlobCatHuggle:801232248035999784> Hug",
            "description": "<@" + taggedUser + ">" + " You have been hugged by " + "<@" + messageAuthor + ">!",
            "color": 8311585,
            "footer": {
              "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "Made with ❤ in Illinois | Anitrox © IDeletedSystem64 2018-2021"
            },
            "image": {
              "url": gif
            }
          }


          message.channel.send({ embed: embed });
            }
    }
