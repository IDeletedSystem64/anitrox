module.exports = {

    name: "slap",
    description: "Slaps an user!",
    execute(client, message, args) {
      const {footerTxt} = require('../config.json');
      const taggedUser = message.mentions.users.first();
//---------------------------------------------------

//---------------------------------------------------
const errorembed = {
  "title": "<:AnitroxError:809651936563429416> Error",
  "color": 13632027,
  "footer": {
    "icon_url": message.author.displayAvatarURL(),
    "text": footerTxt
  },
  "fields": [
    {
      "name": "Well that happened...",
      "value": "You need to @mention an user!"
    }
  ]
};

if(!taggedUser) {
  return message.channel.send({ embed: errorembed});
// Checks if a user was mentioned. If not, returns error message.
}

      const embed = {
            "title": ":anger: Slap",
            "description": "<@" + taggedUser + "> You have been slapped by <@" + messageAuthor + ">!",
            "color": 9442302,
            "footer": {
              "icon_url": message.author.displayAvatarURL(),
              "text": footerTxt
            },
            "image": {
              "url": "https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943"
            }
          }


          message.channel.send({ embed: embed });
            }
    }
