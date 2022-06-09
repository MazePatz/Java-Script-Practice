const mocha = require('mocha');
const chai = require('chai');
const factorial = require('./factorial');

mocha.describe('Test factorial', () => {
  mocha.it('should equal 5', () => {
    chai.expect(factorial.findFactorial(120)).to.equal(5);
  });
  mocha.it('should equal 0', () => {
    chai.expect(factorial.findFactorial(110)).to.equal("None");
  });
});

