module.exports = {
    name: 'setnick',
    description: 'Sets yours or another users nickname',
    execute(client, message, args,) {
        new Discord.GuildMember(data, guild);
        const guild = guild.fetch
        const member = guild.member(message.author)  
    if (message.channel.permissionsFor(message.author).has("CHANGE_NICKNAME")){
        
        } else {
    message.channel.send("no permission")
    }
}}