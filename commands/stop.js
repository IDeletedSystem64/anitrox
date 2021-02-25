
module.exports = {
    name: 'stop',
    description: '(Owner Only) Shuts down the bot.',
    execute( client, message, args, denied) {
        if (message.author.id == 309427567004483586) {
            message.channel.send("<a:NyabotWorking:697147309531594843> The bot is stopping!")
            .then
            client.destroy()
            .catch(console.error)
        } else {
            const embed = {
				"title": denied + "**Access is denied**",
				"color": 13632027,
				"footer": {
				  "icon_url": "https://cdn.discordapp.com/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
				  "text": "Anitrox © IDeletedSystem64 2018-2021 All Rights Reserved."
				},
				"fields": [
				  {
					"name": "**What Happened?**",
					"value": "You don't have the appropriate permissions to run this command!"
				  }
				]
			  };
			  message.channel.send({ embed });
        }
    }}