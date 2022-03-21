
module.exports = {
    name: 'restart',
    description: '(Owner Only) Shuts down the bot.',
    execute(client, message, args) {
        const { token } = require('../config.json');
        if (message.author.id == 309427567004483586) {
            message.channel.send("<a:NyabotWorking:697147309531594843> Restarting...").then
            client.destroy()
            .catch(console.error)
        .then
        setTimeout(() => { client.login(token); }, 3000);
        message.channel.send("<:NyabotSuccess:697211376740859914> Restart Successful")
        console.log("All systems go")
        } else {
            message.channel.send("<:NyabotDenied:697145462565896194> Access Denied, You must be bot owner to execute this command.");
        }
    }}
