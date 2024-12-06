'use strict';

const inc = (obj) => {
  if(typeof obj === "object"){
    obj.b++;
  }
};

module.exports = { inc };