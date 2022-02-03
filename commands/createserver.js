module.exports = {
    name: 'serversetup',
    description: 'Sets up channels and roles for your newly created server',
    execute(client, message, args) {
        const start = {
            "title": "<a:AnitroxWorking:697147309531594843> Beginning Server Setup...",
            "description": "This will set up the following:\nStaff Roles\nStaff Channels\nServer Channels\nThis will not set up:\nAdvertisements (if applicable)\nModeration bots\n\nClick :white_check_mark: to Continue\nClick :x: to Cancel",
            "color": 12390624,
            "footer": {
              "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "Made with ❤ in Illinois | Anitrox by IDeletedSystem64"
            }
          };
 // Embeds

 message.channel.send({ embed: start });
        }
    }
// This ain't even finished yet lmao