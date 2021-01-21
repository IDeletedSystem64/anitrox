
module.exports = {
    name: 'restart',
    description: '(Owner Only) Shuts down the bot.',
    execute(client, message, args) {
     const token=("<token>")
        if (message.author.id == 309427567004483586) {
            message.channel.send("<a:NyabotWorking:697147309531594843> Restarting...").then
            client.destroy()
            .catch(console.error)
        .then
        client.login(token);
        message.channel.send("<:NyabotSuccess:697211376740859914> Restart Successful")
        } else {
            message.channel.send("<:NyabotDenied:697145462565896194> Access Denied, You must be bot owner to execute this command.");
        }
    }}