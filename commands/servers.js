
module.exports = {
    name: 'servers',
    description: 'Lists what servers the bot is in',
    execute(message) {
        if (message.author.id == 309427567004483586) {
            var i = 0, guildLength = 0, ownerData = {};
var fileToExportTo = "./servers.txt";

client.guilds.forEach(g=> {
 guildLength = client.guilds.size;
 var moreSquares = "";
 for (var cnt = 0; cnt < g.name.length; cnt++) moreSquares = moreSquares + "=";

 var content = "\n== " + g.name + " ==\nID: " + g.id + "\nOWNER: " + g.owner.user.tag + " (" + g.owner.id + ")\n===" + moreSquares + "===\n";
 require("fs").appendFile(fileToExportTo, content, 'utf8', (err) => { if (err) { console.error(err); } });

 if (ownerData[g.owner.id] == null)
  ownerData[g.owner.id] = { "id": g.owner.id, "tag": g.owner.user.tag, "count": 1 };
 else
  ownerData[g.owner.id].count = (ownerData[g.owner.id].count + 1);
 i++;
});

var morecontent = [];
for (let owner in ownerData) {
 morecontent.push(ownerData[owner]["tag"] + " (" + ownerData[owner]["id"] + "): " + ownerData[owner]["count"]);
};

var content = "\n\n== FINAL COUNTS [as they appear they owned] ==\n" + morecontent.join("\n") + "\n==============================================\nExported: " + new Date().toString() + "\nData is as accurate as exported time & date.";
require("fs").appendFile(fileToExportTo, content, 'utf8', (err) => { if (err) { console.error(err); } });
if (i == guildLength)
 message.channel.send(client.config.system.emotes.success + " Done.");
        } else {
            message.channel.send("<:NyabotDenied:697145462565896194> Access Denied, You must be bot owner to execute this command.");
        }
    }}