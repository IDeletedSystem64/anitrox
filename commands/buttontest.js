module.exports = {
    name: "buttontest",
    description: "buttontest",
    execute(client, message, args) {
const buttonembed = {
  "title": "buttontest",
  "description": "anitrox buttontest",
  "color": 9442302,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
    "text": "footertext"
  }
};
message.channel.send({ embed: buttonembed });
    }
}