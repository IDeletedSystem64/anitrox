module.exports = {
  event: require('path').parse(__filename).name,
  once: false,
  listener: (client, config) =>
    async (message) => {
      if (!message.content.startsWith(config.prefix) || message.author.bot) return;

      const args = message.content.slice(config.prefix.length).split(/\s+/);
      const command = args.shift()?.toLowerCase() ?? '';

      if (!client.commands.has(command)) return;

      try {
        await client.commands.get(command)?.parseMessage(client, config, message, args);
      } catch (error) {
        console.error(error);
        message.channel.send({
          embeds: [{
            title: '<:AnitroxError:809651936563429416> **Something went wrong!**',
            description: error.stack,
            color: 13632027,
            footer: {
              icon_url: message.author.displayAvatarURL(),
              text: config.footerTxt
            }
          }]
        });
      }
    }
};
