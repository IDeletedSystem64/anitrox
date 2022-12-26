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
        message.channel.send({
          embeds: [{
            title: `<:AnitroxWarning:997565364718276669> Attention, ${message.author.username}!`,
            description: `Anitrox will be moving entirely to slash commands in 1.4, You will no longer be able to use \`\` ${command} \`\` by typing ${config.prefix}${command}.\n Please use slash commands in the future. [Learn more](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ)`,
            color: 15548997,
            footer: {
              icon_url: message.author.displayAvatarURL(),
              text: config.footerTxt
            }
          }]
        });
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
