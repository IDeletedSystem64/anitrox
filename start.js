#!/usr/bin/env -S node

const fs = require('fs');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const config = require('./config.json');
require('dotenv').config();
console.log('Starting!');
// const client = new Discord.Client({ intents: config.intents.map(intent => eval(`Discord.Intents.FLAGS.${intent}`)) });
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences
  ]
});
// todo: move back to file
client.commands = new Collection();
fs.readdirSync('./commands')
  .filter(file => file.endsWith('.js'))
  .forEach(file => {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
  });
// Create a collection using those command files

fs.readdirSync('./events')
  .filter(file => file.endsWith('.js'))
  .map(file => require(`./events/${file}`))
  .forEach(({ once, event, listener }) => {
    client[once ? 'once' : 'on'](event, listener(client, config));
  });
// Create listeners from the event files.

client.generateErrorMessage = (errorMsg, avatarURL) => ({
  embeds: [{
    title: '<:AnitroxError:809651936563429416> Error',
    color: 13632027,
    footer: {
      icon_url: avatarURL,
      text: config.footerTxt
    },
    fields: [
      {
        name: 'Something went wrong!',
        value: errorMsg
      }
    ]
  }]
});

client.login(process.env.TOKEN);
// Login to Discord!
