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
module.exports = eqArrays;


const assertArraysEqual = function(first,second) {
  if (eqArrays(first,second)) {
    console.log(`😊 Assertion passed : ${first} === ${second}`);
  } else {
    console.log(`😢 Assertion failed : ${first} !== ${second}`);
  }
};
module.exports = assertArraysEqual;

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
  }console.log(result);
};
module.exports = without;

const words = ["hello","world", "lighthouse"];
without(words, ["world","lighthouse"]);
let giberrish = [1,2,'3','hello',5,8];
without(giberrish,[1,3,'hello',6,2]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);



/*const without = function(array,itemToRemove) {
  let result = [];
  for (let element of array) {
    if(!itemToRemove.includes(element)){
        result.push(element);
    }
} console.log(result);
}

const filtered = [];
for (let i = 0; i < source.length; i++) {
    let found = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
        if (source[i] === itemsToRemove[j]) {
            found = true;
            break;       }     }
            if (!found) {
                filtered.push(source[i]);     }   }
            return filtered;*/