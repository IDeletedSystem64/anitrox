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

module.exports = {
  name: '8ball',
  description: 'Ask Anitrox a question, any question! and they will answer it!',
  syntax: ["[Question]"],
  async execute(client, message, args, footerTxt) {
    const answer = answers[Math.floor(Math.random() * Object.keys(answers).length)];
    const question = args.slice(0).join(" ")

    if (!question) {
      await message.channel.send(client.generateErrorMessage("You need to ask a question!", message.author.displayAvatarURL));
    } else {
      await message.channel.send({embed: {
        "title": ":8ball: Anitrox 8 Ball",
        "description": `Your question: **${question}**`,
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
      }});
    }
  }
}