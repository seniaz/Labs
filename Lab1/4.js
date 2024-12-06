'use strict';

const countTypesInArray = (arr) => {
    const counterTypes = {};
    for (const item of arr){
        const type = typeof item;
        const count = counterTypes[type] || 0;
        counterTypes[type] = count + 1;
      }
    
      return counterTypes;
    };

module.exports = { countTypesInArray };