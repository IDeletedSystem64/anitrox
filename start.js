#!/usr/bin/env -S node

const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');

console.log('Starting!');
const client = new Discord.Client({ intents: config.intents.map(intent => eval(`Discord.Intents.FLAGS.${intent}`)) });

client.commands = new Discord.Collection();
fs.readdirSync('./commands')
  .filter(file => file.endsWith('.js'))
  .forEach(file => {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
  });

fs.readdirSync('./events')
  .filter(file => file.endsWith('.js'))
  .map(file => require(`./events/${file}`))
  .forEach(({ once, event, listener }) => {
    client[once ? 'once' : 'on'](event, listener(client, config));
  });

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

client.login(config.token);
