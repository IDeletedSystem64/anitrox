const { Message } = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'addstatus',
    description: 'Adds a new custom status to Anitrox',
    async execute(message, args) {
        const embed = {
            "title": "<:AnitroxSuccess:809651936819019796> Status Added",
            "color": 3585665,
            "footer": {
              "icon_url": "https://images-ext-2.discordapp.net/external/-qaO3jaZLojhEnjrHiKABdXD7gLWqFvdUqHdskNGWhE/https/media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "Made with ❤ in Illinois | Anitrox by IDeletedSystem64"
            },
            "fields": [
              {
                "name": "Successfully added status!",
                "value": "Added status " + args.slice(0,2)
              }
            ]
          };
          const statuses = JSON.parse((await fs.promises.readFile('./statuses.json')).toString())
    statuses.push(args.slice(0,2))
    await fs.promises.writeFile('./statuses.json', JSON.stringify(ranges));
    Message.channel.send( {embed} )
        }
    }