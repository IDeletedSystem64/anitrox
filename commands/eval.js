
module.exports = {

	name: 'eval',
	description: 'Runs js code',
	execute(client, message, args) {
    const commandName = args[0].toLowerCase();
		if (message.author.id == 309427567004483586) {
            try {
              const code = args.join(" ");
              let evaled = eval(code);

              if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);

              message.channel.send(clean(evaled), {code:"xl"});
						} catch (error) {
							const embed = {
								"title": "<:NyabotError:697145462347661412> **Well that happened...**",
								"color": 13632027,
								"footer": {
								  "icon_url": "https://cdn.discordapp.com/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
								  "text": "Anitrox © IDeletedSystem64 2018-2021 All Rights Reserved."
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
							  };
							  message.channel.send({ embed });
	}
};
    }
}
