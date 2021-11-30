const assertEqual = require('./assertEqual')

const eqArrays = require('./eqArrays')

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
module.exports = eqObjects;


/* test
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, ba), true)
assertEqual(eqObjects(ab, abc), false)
const cd = { c: "1", d: ["2", 3] };
 const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
*/