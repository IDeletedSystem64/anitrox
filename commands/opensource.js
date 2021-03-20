module.exports = {
    name: "opensource",
    description: "Get the source for the original Anitrox code!",
    execute(client, message, args) {
        const embed = {
            "title": "<:AnitroxInfo:809651936831733791> Anitrox Source",
            "description": "These legacy builds are **!!NOT!!** supported and are considered discontinued. Some of this legacy code may still be in use but is being replaced with more up-to-date and usable code.",
            "url": "https://discordapp.com",
            "color": 9442302,
            "footer": {
              "icon_url": "https://cdn.discordapp.com/emojis/809651936819019796.png?v=1",
              "text": "Released under GPLv3 licese. "
            },
            "thumbnail": {
              "url": "https://cdn.discordapp.com/attachments/793537380330111028/822894433665810432/nyabotanitrox.png"
            },
            "fields": [
              {
                "name": "anitroxlegacy_v1/nyabotv1",
                "value": "https://github.com/IDeletedSystem64/anitroxlegacy"
              },
              {
                "name": "anitroxlegacy_v3/projectcanary (Nyabot 3.0)",
                "value": "https://github.com/IDeletedSystem64/anitroxlegacyv3"
              },
              {
                "name": "License Type",
                "value": "This is released under the GNU Public License v3. You are allowed to modify, rewrite, expand on the code as you wish. You don't need to provide me credit on your projects involving this code. Learn more at http://www.gnu.org/licenses/gpl-3.0.html",
                "inline": true
              }
            ]
          };
          message.channel.send({ embed });
    }
}