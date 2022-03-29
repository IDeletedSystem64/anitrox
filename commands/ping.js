module.exports = {
  name: "ping",
  description: "Gets bot ping",
  async execute(client, message, args, config) {
      const index = Math.floor(Math.random() * config.locations.length);
      const location = config.locations[index]
  
    await message.channel.send({embed:{
      "title": ":ping_pong: Ping",
      "description": `**Pong!** We pinged **${location}** and got ${client.ws.ping} ms.`,
      "color": 9442302, 
      "footer": {
        "icon_url": message.author.displayAvatarURL(),
        "text": config.footerTxt
      }
    }});
  }
};
