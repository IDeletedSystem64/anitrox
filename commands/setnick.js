module.exports = {
    name: 'setnick',
    description: 'i genuinely fucking dont know. :SylvPain:',
    execute(client, message, args, Discord) {
    if (message.channel.permissionsFor(message.author).has("CHANGE_NICKNAME")) {
        message.channel.send("meow")
    } else {
        message.channel.send("no permission")
    };
}}