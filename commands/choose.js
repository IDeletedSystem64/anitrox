module.exports = {

  name: require('path').parse(__filename).name,
  description: "Give some lines of input, and get one back at random",

  async execute(client, message, _, config) {
    var strarr = message.content.split(/\s*\n\s*/);
    strarr[0] = strarr[0].slice(this.name.length + config.prefix.length);
    const answer = strarr[Math.floor(Math.random() * strarr.length)];
    
    if (answer === "") {
      await message.channel.send(client.generateErrorMessage("You need to provide some input!", message.author.displayAvatarURL()));
    } else {
      await message.channel.send({embed: {
        "title": "I have made my decision:",
        "description": answer,
        "color": 8311585,
        "footer": {
          "icon_url": message.author.displayAvatarURL(),
          "text": config.footerTxt
        },
      }});      
    }
  }
}
