
module.exports = {
	
	name: 'invite',
	description: 'Sends invite to add the bot to a server.',
	execute(client, message) {
		if (message.author.id == 309427567004483586) {
		message.channel.send('Link: http://bit.ly/39ZcG2K');
		} else
		message.channel.send("<:NyabotWarning:677296901590351919> ``Sorry, The bot is not public. Contact the dev if you'd like to have it in your server");
	},
};