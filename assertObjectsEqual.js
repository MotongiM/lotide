const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let item in object1) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      return eqArrays(object1[item],object2[item]);
    }  else if (typeof(object1[item]) !== typeof({}) && typeof(object2[item]) !== typeof({}) && (object1[item] !== object2[item])) {
      return false;
    } else if (typeof(object1[item]) === typeof({}) || typeof(object2[item]) === typeof({}) && eqArrays(object1[item],object2[item]) === false) {
      return false;
    } else if (typeof(object1[item]) === typeof({}) || typeof(object2[item]) === typeof({})) {
      return eqArrays(object1[item],object2[item]);
    }
  }  return true;
};

const assertObjectsEqual = function(actual, expected) {
    
  const inspect = require('util').inspect;
    
  if (eqObjects(actual,expected)) {
    console.log(`😊 Assertion passed : ${inspect(actual)} === ${(expected)}`);
  } else {
    console.log(`😢 Assertion failed : ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
module.exports = assertObjectsEqual;

/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc)
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);
const cd2 = { c: "1", d: ["2", 3, 4] }
assertObjectsEqual(dc,cd2);
*/