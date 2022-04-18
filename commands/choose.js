module.exports = {

  name: require('path').parse(__filename).name,
  description: "Give some lines of input, and get one back at random",

  async execute(client, message, _, config) {
    var [head, ...options] = message.content.split(/\s*\n\s*/);
    head = head.slice(this.name.length + config.prefix.length);
    if (head) options.push(head);

    if (!options.length) {
      await message.channel.send(client.generateErrorMessage("You need to provide some input!", message.author.displayAvatarURL()));
    } else {
      const answer = options[Math.floor(Math.random() * options.length)];
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
