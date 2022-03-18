module.exports = {
  name: "ping",
  description: "Gets bot ping",
  execute(client, message) {
  const {footerTxt} = require('../config.json');
  
    const embed = {
  "title": ":ping_pong: Ping",
  "description": "**Pong!** " + client.ws.ping + " ms.",
  "color": 9442302, 
  "footer": {
    "icon_url": message.author.displayAvatarURL(),
    "text": footerTxt
  }
}
  
  message.channel.send({ embed });
  }
};
