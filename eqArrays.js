const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};
module.exports = assertEqual;

const eqArrays = function(first,second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      return true;
    } else {
      return false;
    }
  }
};
eqArrays([1, 2, 3], [3, 2, 1]);
module.exports = eqArrays;