'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;
  let resulte = 0;
  do {
    resulte += args.pop();
  } while (args.length > 0);
  return resulte;
};

module.exports = { sum };