const eqArrays = require("./eqArrays");

const assertArraysEqual = function(first,second) {
  if (eqArrays(first,second)) {
    console.log(`😊 Assertion passed : ${first} === ${second}`);
  } else {
    console.log(`😢 Assertion failed : ${first} !== ${second}`);
  }
};
module.exports = assertArraysEqual;