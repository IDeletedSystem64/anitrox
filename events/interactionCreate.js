module.exports = {
  event: require('path').parse(__filename).name,
  once: false,
  listener: (client, config) =>
    async (interaction) => {
      if (interaction.isApplicationCommand()) {
        try {
          await client.commands.get(interaction.commandName)?.parseInteraction(client, config, interaction);
        } catch (error) {
          console.error(error);
          interaction.reply({
            embeds: [{
              title: '<:AnitroxError:809651936563429416> **Something went wrong!**',
              description: error.stack,
              color: 13632027,
              footer: {
                icon_url: interaction.user.displayAvatarURL(),
                text: config.footerTxt
              }
            }]
          });
        }
      }
    }
};
