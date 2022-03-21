module.exports = {
    name: '8ball',
    description: 'Ask Anitrox a question, any question! and they will answer it!',
    syntax: ["[Question]"],
    execute(client, message, args) {
    const {footerTxt} = require('../config.json');
        const answers = [
            "Heck no!",
            "Are you crazy!? No!",
            "Don't even think about it.",
            "No! You might bork something!",
            "Heck yeah",
            "I don't think so.",
            "Let me think about it first. No.",
            "Let me think about it first. Yeah",
            "Let me think about it first. Maybe",
            "I don't know man",
            "Maybe",
            "I'm not sure",
            "Ask again",
            "YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!!!",
            "Definitely!",
            "Go for it! :smile:",
            "Good idea!",
            "Sure"
        ]
        const index = Object.keys(answers)[Math.floor(Math.random() * Object.keys(answers).length)];
        var question = args.slice(0).join(" ")
        var answer = (answers[index]);
        console.log(args);

        if (!question) {
          const embed = {
            "title": "<:AnitroxError:809651936563429416> **Something went wrong!**",
            "description": "You need to ask a",
            "color": 13632027,
            "footer": {
              "icon_url": message.author.displayAvatarURL(),
              "text": footerTxt
            }
          }
        }
        const embed = {
            "title": ":8ball: Anitrox 8 Ball",
            "description": "Your question: **" + question + "**",
            "color": 9442302,
            "footer": {
              "icon_url": message.author.displayAvatarURL(),
              "text": footerTxt
            },
            
            "fields": [
              {
                "name": "🤔 My Answer",
                "value": answer
              }
            ]
          };
          message.channel.send({ embed });
          
    }
}