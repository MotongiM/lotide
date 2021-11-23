const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅  Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
    }
  };
  module.exports = assertEqual;
  
const eqArrays = function(first,second){
    for(let i = 0;i < first.length;i++){
        for(let j = 0; j < second.length;j++){
            if(first[i] === second[j]){
                return true;
            }else{
                return false;
            }
        }
    }
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
module.exports = eqArrays;