"use strict";
module.exports = function() {
  var vault = {};
  /*
  accepts two arguments `key` and `value`.  
  will set the `value` in the vault identified by it's `key`.  
  */
  function setValue(key, value) {
    if (key === undefined) {
      return null;
    }
    vault[key] = value;
  }

  /*
    accepts one argument `key`.  
    will return the `value` that was set if the `key` exists in the vault.  
    will return `null` if the `key` does not exist in the vault.
    */
  function getValue(key) {
    if (key === undefined) {
      return null;
    }
    if (vault.hasOwnProperty(key)) {
      return vault[key];
    } else {
      return null;
    }
    // if (vault[key] != undefined) {
    //   return vault[key];
    // } else {
    //   return null;
    // }
  }

  return {
    setValue,
    getValue
  };
};
