// Write your tests here!
const {substitution} = require('../src/substitution.js');
const expect = require('chai').expect

describe('Substitution Cipher', () => {
  it('(thinkful, xoyqmcgrukswaflnthdjpzibev) should be: jrufscpw', () => {
    let actual = substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibev');
    let expected = 'jrufscpw'; 
    expect(actual).to.equal(expected)
  })
  
    it('(You are an excellent spy, xoyqmcgrukswaflnthdjpzibev) should be: elp xhm xf mbymwwmfj dne', () => {
    let actual = substitution('You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev');
    let expected = 'elp xhm xf mbymwwmfj dne'; 
    expect(actual).to.equal(expected)
  })
  
  it('(thinkful, short) should be: false', () => {
    let actual = substitution('thinkful', 'short');
    let expected = false; 
    expect(actual).to.equal(expected)
  })
  
  it('(thinkful, abcabcabcabcabcabcabcabcyz) should be: false', () => {
    let actual = substitution('thinkful', 'abcabcabcabcabcabcabcabcyz');
    let expected = false; 
    expect(actual).to.equal(expected)
  })
  
})
