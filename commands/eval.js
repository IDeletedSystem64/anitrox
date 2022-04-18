const { inspect } = require("util");

module.exports = {

	name: require('path').parse(__filename).name,
	description: 'Executes JS code',

	async execute(_, message, args, config) {
		if (message.author.id == config.ownerID) {
      try {
        const code = args.join(" ");
        const evaled = inspect(eval(code));
        await message.channel.send(evaled, {code:"xl"});
      } catch (error) {
        await message.channel.send({embed: {
          "title": "<:AnitroxError:809651936563429416> **Something went wrong! **",
          "color": 13632027,
          "footer": {
            "icon_url": message.author.displayAvatarURL(),
            "text": config.footerTxt
          },
          "fields": [
            {
            "name": "**What Happened?**",
            "value": "The command you tried to run failed to execute due to an error."
            },
            {
            "name": "Error Info",
            "value": error.message
            }
          ]
        }});
      }
    };
  }
}
