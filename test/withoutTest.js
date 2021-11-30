const assert = require('chai').assert;
const without = require("../without");


describe("#without", () => {
    const array = ["Hello", "Lighthouse", "Labs"];
    it("returns ['Hello','Lighthouse'] from ['Hello','Lighthouse','Labs'] ", () => {
        assert.deepEqual(without(array, ['Labs']),['Hello','Lighthouse']);
    });
    it("return [2,3] for [1,2,3]", () => {
        const array = [1,2,3]
        assert.deepEqual(without(array,[1]), [2,3]);
    });
    it("returns ['1','2'] from (['1','2','3'],[1,2,'3'])", () => {
        const array = ['1','2','3']
        assert.deepEqual(without(array, [1,2,'3']),['1','2']);
    });
});