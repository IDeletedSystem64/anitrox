
module.exports = {

	name: 'info',
	description: 'Shows bot and host information',
	execute(client, message, args) {
    const { build, release } = require('../config.json');
    function Uptime(uptimetype) {
      let totalSeconds = (uptimetype / 1000);

      let days = parseInt(Math.floor(totalSeconds / 86400)) + " day";
      let hours = Math.floor(parseInt(Math.floor(totalSeconds / 3600)) % 24) + " hour";
      totalSeconds %= 3600;
      let minutes = parseInt(Math.floor(totalSeconds / 60)) + " minute";
      let seconds = parseInt(totalSeconds % 60) + " second";

      if (parseInt(days.substring(0,2)) != 1) days += "s";
      if (parseInt(hours.substring(0,3)) != 1) hours += "s";
      if (parseInt(minutes.substring(0,3)) != 1) minutes += "s";
      if (parseInt(seconds.substring(0,3)) != 1) seconds += "s";

      let uptime = `${days}**, **${hours}**, **${minutes}**, **${seconds}`;
      return uptime;
  };

    const os = require("os")
    var osu = require('node-os-utils')
    var cpu = osu.cpu
    let botAvatar = client.user.displayAvatarURL()
    const embed = {
            "title": "<:AnitroxInfo:809651936831733791> Information about Anitrox",
            "description": "Everything you've ever wanted to know about Anitrox!",
            "color": 9442302,
            "footer": {
              "icon_url": "https://cdn.discordapp.com/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "meow"
            },
            "thumbnail": {
              "url": ("https://cdn.discordapp.com/avatars/576805923964715018/20f9b2815850dbbebd6d858308c90330.webp")
            },
            "fields": [
              {
                "name": "Bot Information",
                "value": "** **"
              },
              {
                "name": "Release Type",
                "value": release
              },
              {
                "name": "Release Version",
                "value": build
              },
              {
                "name": "Uptime",
                "value": Uptime(client.uptime)
              },
              {
                "name": "<:memory:793536677737136178> Bot Memory Usage",
                "value": (Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100) + " MiB"
              },
              {
                "name":  "<:hostinfo:793529505263517747> Host Information",
                "value": "** **"
              },
              {
                "name": "<:hostinfo:793529505263517747> Host Uptime",
                "value": Uptime(os.uptime() * 1000)
              },
              {
                "name": "<:cpu:793672442056802354> CPU Type",
                "value": process.arch + ", " + cpu.model()
              },

              {
                "name": "<:hostos:793866961675223090> OS Type",
                "value": process.platform + " / " + os.version()
              },
              {
                "name": "<:node:793537507018145813> Node.JS Version",
                "value": process.version
              },
              {
                "name": "<:hostinfo:793529505263517747> Bot Ping",
                "value": Math.round(client.ws.ping) + " ms",
                "inline": true
              },
              {
                "name":  "<:usersuccess:793885338250641469> **Special Thanks To**",
                "value": "@OfficialTCGMatt for providing help with development\n @chuu_shi Allowing me to host Anitrox on his server"
              }

            ]
          };
         message.channel.send({ embed });

        }
      };
