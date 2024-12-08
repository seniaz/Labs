'use strict';

const rangeOdd = (start, end) => {
    if (end - start < 0) return [];
    const array = [];
    for (let n = start; n <= end; n++) {
      if (n % 2 !== 0) array.push(n);
    }
    return array;
};

module.exports = { rangeOdd };