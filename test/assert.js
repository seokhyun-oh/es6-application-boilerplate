import * as mocha from 'mocha';
import chai from 'chai';

const { assert } = chai;

mocha.describe('test', () => {
  mocha.it('should be ok', () => {
    assert.equal(1, 1);
    assert.notEqual(1, 2);
  });
});
