const middle = require("../middle.js");
const assert = require('chai').assert;


describe("#middle", () => {
    const words = ['Yo Yo','Lighthouse','Labs'];
    it("returns ['Lighthouse'] for ['Yo Yo','Lighthouse','Labs']", () => {
        assert.deepEqual(middle(words),['Lighthouse']);
    });
    it("return [3,4] for [1,2,3,4,5,6]", () => {
        const array = [1,2,3,4,5,6]
        assert.deepEqual(middle(array),[3,4])
    })
    it("returns [3] for [1,2,3,4,5]", () => {
        const array = [1,2,3,4,5]
        assert.deepEqual(middle(array), [3]);
    });

});