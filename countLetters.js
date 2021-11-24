const countLetters = function(string) {
  let newString = string.split(" ").join('');
  let results = {};
  for (let element of newString) {
    if (results[element]) {
      results[element] += 1;
    } else {
      results[element] = 1;
    }
  }
  return results;
};
module.exports = countLetters;