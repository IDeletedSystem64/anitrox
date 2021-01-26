module.exports = {

    name: "kiss",
    description: "Kisses an user!",
    execute(client, message, args) {
      const messageAuthor = message.author
      const taggedUser = message.mentions.users.first();
       // --------------------------------------
       const gifchoices = [
        "https://thumbs.gfycat.com/SlowGlossyBlackcrappie-small.gif",
        "https://media0.giphy.com/media/12VXIxKaIEarL2/giphy.gif",
        "https://cutewallpaper.org/21/anime-kiss-girl/Anime-Kissing-GIF-Anime-Kissing-Girl-Discover-Share-GIFs.gif",
        "https://i.makeagif.com/media/4-29-2017/orH05W.gif",
        "https://31.media.tumblr.com/ea7842aad07c00b098397bf4d00723c6/tumblr_n570yg0ZIv1rikkvpo1_500.gif"

      ];
      const index = Math.floor(Math.random() * (gifchoices.length - 1) + 1);
      var gif = (gifchoices[index]);
      // ---------------------------------------    
      const embed = {
            "title": ":heart: Kiss",
            "description": "<@" + taggedUser + ">" + " You have been kissed by <@" + messageAuthor + ">!",
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
