module.exports = () => {
  const date = new Date();
  const timeDate = date.toLocaleDateString();
  const time = date.toLocaleTimeString();

  return ` ${time} | ${timeDate} `;
};
