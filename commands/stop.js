
module.exports = {
    name: 'stop',
    description: '(Owner Only) Shuts down the bot.',
    execute(client, message, args) {
        if (message.author.id == 309427567004483586) {
            message.channel.send("<a:NyabotWorking:697147309531594843> Shutting Down...").then
            client.destroy()
            .catch(console.error)
        } else {
            message.channel.send("<:NyabotDenied:697145462565896194> Access Denied, You must be bot owner to execute this command.");
        }
    }}