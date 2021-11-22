const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅  Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
    }
  };
  module.exports = assertEqual;
  
  // TEST CODE


const head = function(array){
    return array[0] ? array[0] : undefined
};

module.exports = head;
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");