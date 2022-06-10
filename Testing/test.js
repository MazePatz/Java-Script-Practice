const mocha = require('mocha');
const chai = require('chai');
const doggo = require('./doggo');

mocha.describe('Test whether doggo\'s place has been excluded', () => {
    mocha.it('Is 1 in the array?', () => {
      chai.expect(doggo.doggo(1)).to.not.include.members(['1st']);
    });
    mocha.it('Is 21 in the array?', () => {
        chai.expect(doggo.doggo(1)).to.include.members(['21st']);
      });
    mocha.it('Is 100 in the array?', () => {
        chai.expect(doggo.doggo(100)).to.not.include.members(['100th']);
    });
    mocha.it('Is 98 in the array?', () => {
        chai.expect(doggo.doggo(98)).to.not.include.members(['98th']);
    });
  });
