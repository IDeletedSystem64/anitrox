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
      "text": "Some commands are hidden for dev-only. | Anitrox © IDeletedSystem64 2018-2021"
    },
    "fields": [
      {
        "name": "Utility Commands",
        "value": "`help` ``info`` ``userinfo`` ``ping`` ``invite`` ``avatar``"
      },
      {
        "name": "Moderation Commands",
        "value": "`ban`/`unban` `kick` `mute`/`unmute` "
      },
      {
        "name": "Server Management Commands",
        "value": "`makerole`/`delrole`/`editrole` `setnick` `makechan`/`editchan`/`delchan` "
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
      }


    ]
  };
  message.channel.send({ embed });
}
};