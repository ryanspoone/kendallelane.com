'use strict';

const getData = require('../server/routes/dribbble/helpers/getData');
const assert = require('assert');

describe('Dribbble test', () => {
    it('should do getData', async () => {
        const result = await getData();
        const expected = [];
        assert.deepEqual(result, expected, 'should be the same')
    })
})