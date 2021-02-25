
module.exports = {
	
	name: 'invite',
	description: 'Sends invite to add the bot to a server.',
	execute(client, message) {
		const embed = {
			"title": "Add Anitrox to your Server",
			"description": "Weather you want stable, or that squeaky clean fresh PTB build, we gotchu.",
			"color": 9442302,
			"footer": {
			  "icon_url": "https://media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
			  "text": "Made with ❤ in Illinois | Anitrox © 2018-2021 IDeletedSystem64"
			},
			"thumbnail": {
			  "url": "https://cdn.discordapp.com/attachments/803658122299572255/814352905394061322/anitroxaddsrvr.png"
			},
			"fields": [
			  {
				"name": "Anitrox",
				"value": "This is the stable main build. \n https://discord.com/oauth2/authorize?client_id=576805923964715018&scope=bot&permissions=8"
			  },
			  {
				"name": "Anitrox PTB (Public Test Build)",
				"value": "This is the PTB build, which has new features as they are pushed out. and is generally stable. \n https://discord.com/oauth2/authorize?client_id=489125054261755925&scope=bot&permissions=66186303"
			  }
			]
		  };
		  message.channel.send({ embed });
	},
};