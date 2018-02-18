
const sum = (...args) => {
  return args.reduce((accumulator, current) => accumulator + current, 0);
};

const asyncing = (args) => {
  return new Promise((resolve) => {
    resolve(sum(...args));
  });
}

async function asyncSum (...args) {
  return await asyncing(args);
}

module.exports = {
  asyncSum,
  sum,
};
