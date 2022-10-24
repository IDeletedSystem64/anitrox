const { Collection } = require('discord.js');

module.exports = {
  event: require('path').parse(__filename).name,
  once: true,
  listener: (client, config) =>
    async () => {
      const sandboxSettings = config.sandbox;
      const localCommands = client.guilds.cache.get(sandboxSettings.id)?.commands;
      const globalCommands = client.application?.commands;
      let existingLocal = await localCommands?.fetch();
      let existingGlobal = await globalCommands?.fetch();

      if (sandboxSettings.enabled) {
        if (sandboxSettings.refreshLocal && localCommands) {
          console.log('deleting previous local commands');
          existingLocal?.forEach(async (x) => {
            await localCommands?.delete(x);
          });
          existingLocal = new Collection();
        }

        if (sandboxSettings.refreshGlobal) {
          console.log('deleting previous global commands');
          existingGlobal?.forEach(async x => {
            await client.application?.commands.delete(x);
          });
          existingGlobal = new Collection();
        }
      }

      client.commands.forEach(async (command) => {
        if (sandboxSettings.enabled && !existingLocal?.map(x => x.name).includes(command.name)) {
          await localCommands?.create(command);
          // console.log(`created new local command ${command.name}`);
        }
        if (!existingGlobal?.map(x => x.name).includes(command.name)) {
          await globalCommands?.create(command);
          // console.log(`created new global command ${command.name}`);
        }
      });

      console.clear();
      console.log('    ___          _ __                 ');
      console.log('   /   |  ____  (_) /__________  _  __');
      console.log('  / /| | / __ \\/ / __/ ___/ __ \\| |/_/');
      console.log(' / ___ |/ / / / / /_/ /  / /_/ />  <  ');
      console.log('/_/  |_/_/ /_/_/\\__/_/   \\____/_/|_|  ');
      console.log('');
      console.log(`${config.release}, ${config.build}`);
      console.log('Bot ready. | Anitrox by IDeletedSystem64 | Now with 100% more slash commands!');
      // Statuses
      setInterval(async () => {
        // Picks a status from the config file
        const index = Math.floor(Math.random() * config.statuses.length);
        await client.user?.setActivity(config.statuses[index]);
      }, 20000);
    }
};
