const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
    let results = [];
    for (let item of array) {
    results.push(callback(item));
    }
    return results;
}


//using map using arrow function
/*
const results1 = words.map(word => word[0]);
console.log(results1); */
module.exports = map;