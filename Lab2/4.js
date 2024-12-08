'use strict'
const range = (start, end) => {
    const RANGE_LEN = end - start;
    if (RANGE_LEN < 0) return [];
    const array = new Array(RANGE_LEN);
    let i = 0;
    for (let n = start; n <= end; n++) {
      array[i++] = n;
    }
    return array;
  };
  
  module.exports = { range };