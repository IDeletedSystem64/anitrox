module.exports = {
	
	name: 'help',
	description: '',
	execute(client, message, args) {

const embed = {
    "title": "<:NyabotInfo:697145463350231040> **Help? HELP!** ",
    "color": 9540095,
    "footer": {
      "text": "Some commands are hidden for dev-only. | Anitrox © IDeletedSystem64 2018-2021"
    },
    "fields": [
      {
        "name": "**General Commands**",
        "value": "`help` ``info`` ``userinfo`` ``ping`` ``invite`` ``avatar`` ``google`` ``youtube``"
      },
      {
        "name": "Moderation Commands",
        "value": "`ban` `kick` `warn` `mute` `unban` `unmute` `purge` `permissions`"
      },
      {
        "name": "Server Management Commands",
        "value": "` channelcreate` `channeldelete` `channelrename` `rolecreate` `roleedit` `roledelete` `setnick`"
      },
      {
        "name": "Fun Commands",
        "value": "`hug` `poke` `bonk` `slap` `pat` `kiss` `lick` `cuddle` `nom`"
      }
    ]
  };
  message.channel.send({ embed });
}
};