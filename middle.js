const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } if (array.length % 2 !== 0) {
    return [array[Math.floor(array.length / 2)]];
  } if (array.length % 2 === 0) {
    return [array[Math.ceil(array.length / 2)]] ,[array[Math.ceil(array.length / 2 + 1)]];
  }
};

module.export = middle;