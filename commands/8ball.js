module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Ask Anitrox a question, any question! and they will answer it!',
  syntax: ["[Question]"],
  
  async execute(client, message, args, config) {
    const index = Math.floor(Math.random() * config.answers.length);
    const answer = config.answers[index]
    const question = args.slice(0).join(" ")

    if (!question) {
      await message.channel.send(client.generateErrorMessage("You need to ask a question!"));
    } else {
      await message.channel.send({embed: {
        "title": ":8ball: 8Ball",
        "description": `Your amazing question: **${question}**`,
        "color": 9442302,
        "footer": {
          "icon_url": message.author.displayAvatarURL(),
          "text": config.footerTxt
        },
        "fields": [
          {
            "name": "Answer",
            "value": `${answer}`
          }
        ]
      }});
    }
  }
}