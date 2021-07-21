module.exports = {
	
	name: 'help',
	description: '',
	execute(client, message, args) {

    const messageAuthor = message.author
const embed = {
    "title": "<:NyabotInfo:697145463350231040> **HELP** " + messageAuthor.username + " **THE BOT IS ON FIRE!** ",
    "color": 9442302,
    "description": "More commands are soon to come, stay tuned!",
    "footer": {
      "text": "Made with ❤ in Illinois | Anitrox by IDeletedSystem64"
    },
    "fields": [
      {
        "name": "Utility Commands",
        "value": "`help` ``info`` ``userinfo`` ``ping`` ``invite`` ``avatar``"
      },
      {
        "name": "Server Management Commands",
        "value": "`setnick`"
      },
      {
        "name": "Action Commands",
        "value": "`hug` `poke` `bonk` `slap` `pat` `kiss` `lick` `cuddle` `nom` `leskiss` `snuggle`"
      },
      {
        "name": "**...or is the bot actually on fire? Come here for help and support!**",
        "value": "bit.ly/anitrox-help"
      },
      {
        "name": "**Or you can view the bot progress, known issues, and planned features!**",
        "value": "bit.ly/anitrox-trello"
      },
      {
        "name": "<:AnitroxInfo:809651936831733791> **The bot isn't yet fully finished. There's more to come! if I don't rewrite from scratch that is 😛**"
      }

    ]
  };
  message.channel.send({ embed });
}
};