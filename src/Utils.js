const randomBool = () => {
  const random = Math.random();
  return random > 0.5 ? true : false;
};

module.exports = { randomBool };
