const Function1 = require('../PS1.P1');
const Function2 = require('../PS1.P2');
const Function3 = require('../PS1.P3');
const {describe, it} = require('mocha');
const {expect} = require('chai');

describe('Test cases for P1', () => {

    it('P1 Test 1', function () {
        let str = Function1("sad");
        expect(str).to.be.equal("ads");
    });
    it('P1 Test 2', function () {
        let str = Function1("supercalifragilisticexpialidocious");
        expect(str).to.be.equal("aaacccdeefgiiiiiiillloopprrssstuux");
    });
    it('P1 Test 2', function () {
        let str = Function1("abcdefghhgfedcba");
        expect(str).to.be.equal("aabbccddeeffgghh");
    });

})
describe('Test cases for P2', () => {

    it('P2 Test 1', function () {
        let ret = Function2("4+2");
        expect(ret).to.be.equal(6);
    });
    it('P2 Test 2', function () {
        let ret = Function2("5*0");
        expect(ret).to.be.equal(0);
    });
    it('P2 Test 2', function () {
        let ret = Function2("0/1");
        expect(ret).to.be.equal(0);
    });

})

describe('Test cases for P3', () => {

    it('P3 Test 1', function () {
        let ret = Function3("4+2",()=>null);
        expect(ret).to.be.equal(null);
    });
    it('P3 Test 2', function () {
        let ret = Function3("5*0",(str)=>str[0]);
        expect(ret).to.be.equal('5');
    });
    it('P3 Test 2', function () {
        let ret = Function3(" ",str => str[1]);
        expect(ret).to.be.equal(undefined);
    });

})