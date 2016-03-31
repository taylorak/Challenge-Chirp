const chai = require('chai');
const expect = chai.expect;
const chirp = require('../chirp.js');

describe('Chirp', function() {
  it('should be a function', function() {
    expect(chirp).to.be.a('function');
  })

  it('should return a string with the word chirp based on the input', function() {
    expect(chirp(5)).to.equal('chirp chirp chirp chirp chirp');
  })
})
