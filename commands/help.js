module.exports = {
    
  name: 'help',
  description: 'Get help on anything from commands, to what the bot does! just not your homework..',
  syntax: '<Command>',

  execute(client, message, args) {
    const {footerTxt} = require('../config.json');

     const Embed = {
      "title": "HELP! SEYMOUR! THE BOT IS ON FIRE!",
      "description": "Get help on anything from commands, to what the bot does! just not your homework..",
      "color": 9442302,
      "footer": {
        "icon_url": message.author.displayAvatarURL(),
        "text": footerTxt + " | No mother it's just the northern lights"
      },
      "fields": [
        {
          "name": "Command List",
          "value": "[Click here!](https://github.com/IDeletedSystem64/anitrox/blob/dev/commands.md)"
        },
        {
          "name": "...Or is the bot actually on fire?",
          "value": "Join the [support server!](https://discord.gg/grebRGsBZ3)"
        }
      ]
    };
    message.channel.send({ embed: Embed });
}};