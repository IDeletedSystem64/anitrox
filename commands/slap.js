module.exports = {

  name: require('path').parse(__filename).name,
  description: 'Slaps an user!',

  async execute (client, message, _, config) {
    const taggedUser = message.mentions.users.first();
    const avatarURL = message.author.displayAvatarURL();

    if (!taggedUser) {
      await message.channel.send(client.generateErrorMessage('You need to @mention a user!', avatarURL));
    } else {
      await message.channel.send({
        embeds: [{
          title: ':anger: Slap',
          description: `${taggedUser} You have been slapped by ${message.author}!`,
          color: 9442302,
          footer: {
            icon_url: avatarURL,
            text: config.footerTxt
          },
          image: {
            url: 'https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943'
          }
        }]
      });
    }
  }
};
