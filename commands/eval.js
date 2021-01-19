
module.exports = {
	
	name: 'eval',
	description: 'Runs js code',
	execute(client, message, args) {
    const commandName = args[0].toLowerCase();
		if (message.author.id == 309427567004483586) {
            try {
              const code = args.join(" ");
              let evaled = eval(code);
         
              if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);
         
              message.channel.send(clean(evaled), {code:"xl"});
            } catch (err) {
              console.log("An error occurred while running that code!")
        
	}
};
    }
}
