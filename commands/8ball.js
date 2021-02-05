module.exports = {
    name: '8ball',
    description: 'Ask Anitrox a question, any question! and they will answer it!',
    execute(client, message, args) {
        const answers = [
            "Heck no!",
            "Are you crazy? No!",
            "Don't even think about it.",
            "No! You might bork something!",
            "Heck yeah",
            "YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
            "Definitely!",
            "Go for it! :smile:"
        // This should have a 50/50 amount of yes and no answers for equality.
        ]
        const index = Math.floor(Math.random() * (answers.length - 1) + 1);
        var answer = (answers[index]);

        const embed = {
            "title": ":8ball: Anitrox 8 Ball",
            "description": "**question**",
            "color": 6942950,
            "footer": {
              "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
              "text": "Made with :heart: in Illinois | Anitrox (C) IDeletedSystem64 2018-2021"
            },
            "author": {
              "name": "author name",
              "url": "https://discordapp.com",
              "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "fields": [
              {
                "name": "🤔",
                "value": "answer"
              }
            ]
          };
          message.channel.send({ embed });
    }
}