module.exports = {
  name: "ping",
  description: "Gets bot ping",
  execute(client, message) {
  const {footerTxt, locations} = require('../config.json');
  
  const index = Math.floor(Math.random() * (locations.length -1 ) + 1);
  PingLocation = locations[index]
  const embed = {
  "title": ":ping_pong: Ping",
  "description": "**Pong!** We pinged **" + PingLocation + "** and got " + client.ws.ping + " ms.",
  "color": 9442302, 
  "footer": {
    "icon_url": message.author.displayAvatarURL(),
    "text": footerTxt
  }
}
  
  message.channel.send({ embed });
  }
};
