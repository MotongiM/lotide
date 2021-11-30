const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


const without = function(array,itemToRemove) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let found = false;
    for (let j = 0; j < itemToRemove.length; j++) {
      if (array[i] === itemToRemove[j]) {
        found = true;
        break;
      } else if (!found && itemToRemove.length - 1 === j) {
        result.push(array[i]);
      }
    }
  } return result;
};

module.exports = without;