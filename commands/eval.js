const { MessageEmbed } = require("discord.js");
const { inspect } = require("util");

module.exports = {

	name: 'eval',
	description: 'Runs js code',
	async execute(_, message, args, footer) {
		if (message.author.id == 309427567004483586 || message.author.id == 475558313376088064) {
      try {
        const code = args.join(" ");
        const evaled = inspect(eval(code));
        await message.channel.send(evaled, {code:"xl"});
      } catch (error) {
        await message.channel.send(new MessageEmbed({
          "title": "<:NyabotError:697145462347661412> **Well that happened...**",
          "color": 13632027,
          "footer": footer,
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
        }));
      }
    };
  }
}
