module.exports = {
  event: require('path').parse(__filename).name,
  once: false,
  listener: () => e => (`[WARN] ${e}`)
};
