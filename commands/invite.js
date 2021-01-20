
module.exports = {
	
	name: 'invite',
	description: 'Sends invite to add the bot to a server.',
	execute(client, message) {
		message.channel.send("PTB: https://discord.com/oauth2/authorize?client_id=489125054261755925&scope=bot&permissions=66186303");
	},
};