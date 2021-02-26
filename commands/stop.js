module.exports = {
    name: "stop",
    description: "Stops the bot",
    execute(client, message, args) {
        if (message.author.id == 309427567004483586) {
        const embed = {
                "title": ":AnitroxWorking: **Shutting Down...**",
                "description": "See you next time!",
                "color": 9442302,
                "footer": {
                  "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
                  "text": "Made with ❤ in Illinois | Anitrox © 2018-2021 IDeletedSystem64"
                }
              };
            message.channel.send({ embed });
            client.destroy()
            process.exit()
        } else {
            const denied = {
                "title": ":AnitroxDenied: Access Denied",
                "description": "You need to be the bot owner to execute this command!",
                "color": 13632027,
                "footer": {
                  "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
                  "text": "Made with ❤ in Illinois | Anitrox © 2018-2021 IDeletedSystem64"
                }
              };
              message.channel.send({ denied });
            }
        }
    }