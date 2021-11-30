const tail = require("../tail.js")
const assert = require('chai').assert;

describe("#tail", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    it("returns 3 for words.length", () => {
    assert.strictEqual((words.length), 3);
    });
    it("return [2,3] for [1,2,3]", () => {
        const array = [1,2,3]
        assert.deepEqual(tail(array),[2,3])
    })
    it("returns ['Lighthouse', 'Labs'] for tail(words)", () => {
        assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
    });

});
