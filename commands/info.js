
module.exports = {
	
	name: 'info',
	description: 'Shows bot and host information',
	execute(client, message, args) {
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
  
   

const version = ("DEV1.0")
    const release = ("anitrox_dev")
    const os = require("os")
  
    const embed = {
            "title": "<:NyabotInfo:697145463350231040> Information about projectanitrox",
            "description": "Everything you've ever wanted to know about projectanitrox!",
            "url": "https://discordapp.com",
            "color": 11038194,
            "footer": {
              "icon_url": "https://cdn.discordapp.com/attachments/549707869138714635/793524910172667964/Screenshot_26.png",
              "text": "Made with ❤ in Illinois | Anitrox © IDeletedSystem64 2018-2021 "
            },
            "thumbnail": {
              "url": "https://cdn.discordapp.com/attachments/549707869138714635/793524910172667964/Screenshot_26.png"
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
                "value": version
              },
              {
                "name": "Uptime",
                "value": Uptime(client.uptime)
              },
              {
                "name": "<:memory:793536677737136178> Bot Memory Usage",
                "value": (Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100) + " MiB" + ", Total Free Memory"
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
                "value": process.arch
              },
              {
                "name": "<:memory:793536677737136178> **System Memory Usage**",
                "value": (Math.round(os.memoryUsage / 1024 / 1024 * 100) / 100) + " MiB of " + (Math.round(os.freemem / 1024 / 1024 * 100) / 100)
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
                "name": "<:Discord:793676263411679232> Discord API Ping",
                "value": "tba" + " ms",
                "inline": true
              },
              {
                "name": "<:hostinfo:793529505263517747> Bot Ping",
                "value": Math.round(client.ws.ping) + " ms",
                "inline": true
              },
              {
                "name": "<:NyabotInfo:697145463350231040> **Want more system information?**",
                "value": "Run n!sysinfo for more detailed system information"
              },
              {
                "name":  "<:usersuccess:793885338250641469> **Special Thanks To**",
                "value": "@OfficialTCGMatt for providing help with development"
              }

            ]
          };
         message.channel.send({ embed });

        }
      };