module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Restarts the bot',
  options: [],

  async parseMessage (client, config, message, args) {
    await message.channel.send(await this.handle(client, config, message.author, args.slice(0).join(' ')));
  },

  async parseInteraction (client, config, interaction) {
    await interaction.reply(await this.handle(client, config, interaction.user, interaction.options.getString('question')));
  },

  async handle (client, config, user) {
    if (user.id === config.ownerID) {
      console.log('Anitrox is restarting now!');
      // await message.channel.send('<a:NyabotWorking:697147309531594843> Restarting...');
      try {
        client.destroy();
        await client.login(config.token);
        console.log('All systems go');
        return '<:NyabotSuccess:697211376740859914> Restart Successful';
      } catch (e) { console.error(e); }
    } else {
      return '<:NyabotDenied:697145462565896194> Access Denied, You must be bot owner to execute this command.';
    }
  }
};
