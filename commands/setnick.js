const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: "setnick",
    description: "Set yours or another users nickname.",
    execute(client, message, args) {
        const guild = guild.fetch        
        const member = guild.member(message.author)
        if (guild.member.hasPermission('CHANGE_NICKNAME')) {
            message.channel.send("yes")
        } else {
            message.channel.send("no")
        }}}
