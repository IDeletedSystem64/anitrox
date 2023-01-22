/* eslint-disable brace-style */ // Tell eslint to stfu :)
const fetch = require('node-fetch');
const config = require('../config.json');

module.exports = () => {
  const repo = `https://api.github.com/repos/${config.gitRepo}/releases/latest`;
  fetch(repo).then(async (response) => {
    response = await response.json();
    const latest = response.name;
    const currentVer = config.build;

    let status = 0; // 0 = Up-to-date, 1 = New update.

    if (currentVer === latest) { status = 0; } // Anitrox is up to date
    else if (currentVer < latest) { status = 1; } // Anitrox is not up to date
    else if (currentVer > latest) { status = 0; } // Anitrox is ahead, Treat this as it being up to date.

    if (status === 1) console.log(`\n✨ It must be your lucky day! Anitrox ${latest} is now available! Download it from github.com/${config.gitRepo}/releases!`); // Log to console about the new release!
  });
};
