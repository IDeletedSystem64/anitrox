module.exports = {
    name: '8ball',
    description: 'Ask Anitrox a question, any question! and they will answer it!',
    execute(client, message, args) {
        const answers = [
            "Heck no!",
            "Are you crazy!? No!",
            "Don't even think about it.",
            "No! You might bork something!",
            "Heck yeah",
            "YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
            "Definitely!",
            "Go for it! :smile:"
        // This should have a 50/50 amount of yes and no answers for equality even though anitrox doesn't seem to care 🙃
        ]
        const index = Math.floor(Math.random() * (answers.length - 1) + 1);
        var question = args.slice(0).join(" ")
        var answer = (answers[index]);
        console.log(args);

        const embed = {
            "title": ":8ball: Anitrox 8 Ball",
            "description": "Your question: **" + question + "**",
            "color": 9442302,
            "footer": {
                "icon_url": "https://images-ext-2.discordapp.net/external/-qaO3jaZLojhEnjrHiKABdXD7gLWqFvdUqHdskNGWhE/https/media.discordapp.net/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
                "text": "Made with ❤ in Illinois | Anitrox © 2018-2021 IDeletedSystem64"
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