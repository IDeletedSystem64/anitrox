const Uptime = require('../functions/uptime.js');
const os = require('os');
const osu = require('node-os-utils');
module.exports = {
  name: 'info',
  description: 'Bot and System information',
  options: [],

  async parseMessage (client, config, message) {
    await message.channel.send(this.handle(client, config, message.author));
  },
  // We'll be moving solely to Slash Commands in 1.4

  async parseInteraction (client, config, interaction) {
    await interaction.reply(this.handle(client, config, interaction.user));
  },

  handle (client, config, user) {
    return {
      embeds: [{
        title: `<:AnitroxInfo:809651936831733791> Information about ${client.user.username}`,
        description: `Everything you've ever wanted to know about your favorite bot, ${client.user.username}!`,
        color: 9442302,
        footer: {
          icon_url: user.displayAvatarURL(),
          text: config.footerTxt
        },
        thumbnail: {
          url: client.user.displayAvatarURL()
        },
        fields: [
          { name: '<:anitrox:831193012699791361> Bot Information', value: '** **' },
          { name: 'Bot Name', value: `${client.user.tag}`, inline: true },
          { name: 'Bot ID', value: `${client.user.id}`, inline: true },
          { name: 'Bot Owner', value: isNaN(config.ownerID) ? "Owner didn't set an OwnerID :(" : client.users.cache.get(config.ownerID).username, inline: true },
          { name: 'Release Type', value: config.release, inline: true },
          { name: 'Version', value: config.build, inline: true },
          { name: ':gear: Bot Process Information', value: '** **' },
          { name: '<:memory:997565609179107369> Bot Memory Usage', value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MiB`, inline: true },
          { name: ':timer: Bot Uptime', value: Uptime(client.uptime), inline: true },
          { name: ':one: Total Servers', value: `** **${client.guilds.cache.size}`, inline: true },
          { name: '<:hostinfo:997565639352926250> System Information', value: '** **' },
          { name: `${((process.platform === 'linux') ? '<:linux_tux:997565742960615424>' : '<:windows:997919047511453696>')} System Platform`, value: process.platform, inline: true },
          { name: `${((process.platform === 'linux') ? ':gear: Kernel Version' : ':gear: System Version')}`, value: os.release(), inline: true },
          { name: ':timer: System Uptime', value: Uptime(os.uptime() * 1000), inline: true },
          { name: '<:cpu:997565592028598282> System CPU Architecture', value: os.arch(), inline: true },
          { name: '<:cpu:997565592028598282> System CPU Model', value: osu.cpu.model(), inline: true },
          { name: '<:nodejs:998609124453531740> Node.js Version', value: process.version, inline: true }
        ]
      }]
    };
  }
};
