module.exports = {
  name: "ping",
  description: "Gets bot ping",
  execute(client, message, args) {
    const embed = {
  "title": ":ping_pong: Ping",
  "color": 15433939,
  "fields": [
    {
      "name": "Ping is " + client.ws.ping + " ms",
      "value": "If this is more than 1500ms there may be a problem!"
    }
  ]
};
message.channel.send({ embed });
  }
};