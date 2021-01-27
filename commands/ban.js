const { GuildMember } = require("discord.js");

module.exports = {
    name: "ban",
    description: "Bans an user, This requires that you have ``BAN_MEMBERS`` or ``ADMINISTRATOR``",
    execute(client, message, args) {
        const banembed = {
            "title": "<:usersuccess:793885338250641469> User Banned",
            "description": "User ${user.tag} was banned!",
            "color": 5736060,
            "fields": [
              {
                "name": "Reason",
                "value": "reason"
              }
            ]
          };
        const user = message.mentions.users.first();
        if (user) {
        const member = message.guild.member(user);
        if (member) {
            member
            .ban({
                reason: 'reason',
            })
            .then(() => 

                  message.channel.send("bye lmao"));
               
        }
            }}}