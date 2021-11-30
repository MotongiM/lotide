const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');

module.exports = {
    assertArraysEqual,
    assertEqual,
    assertObjectsEqual,
    countLetters,
    countOnly,
    eqArrays,
    eqObjects,
    findKey,
    findKeyByValue,
    head,
    letterPositions,
    map,
    middle,
    tail,
    takeUntil,
    without
  };