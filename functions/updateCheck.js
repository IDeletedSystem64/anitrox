/* eslint-disable brace-style */ // Tell eslint to stfu :)

const fetch = require('node-fetch');
const config = require('../config.json');

class updateChecker {
  constructor () {
    this.status = null;
    this.failReason = null;
  }

  checkUpdates = (notify) => {
    const repo = `https://api.github.com/repos/${config.updater.gitRepo}/releases/latest`;
    const getUpdates = () => {
      return fetch(repo)
        .then(async (response) => {
          if (response.status !== 200) {
            this.status = 2; // Error
            this.failReason = response.statusText;
          } else {
            response = await response.json();
            if (!response) { this.status = 2; } // Something went wrong while checking for updates :(
            const version = {
              latest: response.name,
              current: config.build
            };

            if (version.current === version.latest) { this.status = 0; return version; } // Up-to-date!
            else if (version.current < version.latest) { this.status = 1; return version; } // Not up to date.
            else this.status = 2; // Something went wrong while checking for updates :(

            return response;
          };
        })
        .catch(err => { console.error(err); });
    };
    return getUpdates().then(response => {
      if (notify === true) {
        if (this.status === 1) console.log(`\n✨ It must be your lucky day! Anitrox ${response.latest} is now available! Download it from github.com/${config.updater.gitRepo}/releases!`); // Log to console about the new release!
        else if (this.status === 2) console.error(`\nSomething went wrong while checking for updates... :( | ${this.failReason}`); // This can probably be done more properly, But quite honestly I'm tired of working at this. ^system64
        else if (this.status === 0) {} // Up-to-date
        else console.error(`Unknown Update Status!! ${this.status}`);
      } else return this.status;
    });
  };

  getStatus = () => { return this.status; };
}

module.exports = function () { return new updateChecker(); };
