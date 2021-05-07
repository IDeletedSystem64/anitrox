module.exports = {
    name: 'opensource',
    description: 'Attributions to open source components used by Anitrox',
    execute(client, message, args){
        const embed = {
            "title": "Component Attribution",
            "description": "Some parts of Anitrox are using open source code, and their attributions are avaliable here!",
            "color": 52508,
            "footer": {
              "icon_url": "https://images-ext-2.discordapp.net/external/-qaO3jaZLojhEnjrHiKABdXD7gLWqFvdUqHdskNGWhE/https/media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "Made with ❤ in Illinois | Anitrox by IDeletedSystem64"
            },
            "thumbnail": {
              "url": "https://cdn.discordapp.com/attachments/803658122299572255/838854256471703602/793885335498522685.png"
            },
            "fields": [
              {
                "name": "Discord.JS",
                "value": "[Check out the Discord.JS project on GitHub](https://github.com/discordjs/discord.js/)"
              },
              {
                "name": "You",
                "value": "Using and supporting the Anitrox Project, thank you! ❤"
              }
            ]
          };
          message.channel.send({ embed });
        }}