module.exports = (uptime) => {
  const tSeconds = (uptime / 1000);

  const tDays = parseInt(tSeconds / 86400);
  const tHrs = parseInt((tSeconds % 86400) / 3600);
  const tMins = parseInt((tSeconds % 3600) / 60);
  const tSecs = parseInt(tSeconds % 60);

  const days = tDays + (tDays === 1 ? ' day' : ' days');
  const hours = tHrs + (tHrs === 1 ? ' hour' : ' hours');
  const minutes = tMins + (tMins === 1 ? ' minute' : ' minutes');
  const seconds = tSecs + (tSecs === 1 ? ' second' : ' seconds');

  return `${days}, ${hours}, ${minutes}, ${seconds}`;
};
