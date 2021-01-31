module.exports = {
    name: "lick",
    description: "Licks an user!",
    execute(client, message, args) {
        const messageAuthor = message.author
        const taggedUser = message.mentions.users.first();