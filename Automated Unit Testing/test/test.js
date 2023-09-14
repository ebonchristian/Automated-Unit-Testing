const chai = require('chai');
const { grade } = require('../problem'); // Import the grade function

const assert = chai.assert;

describe('Grading System for 1.00', () => {
    it('should return 1.00 for grade 98', () => assert.equal(grade(98), 1.00));
    it('should return 1.00 for grade 99', () => assert.equal(grade(99), 1.00));
    it('should return 1.00 for grade 100', () => assert.equal(grade(100), 1.00));
});

describe('Grading System for 1.25', () => {
    it('should return 1.25 for grade 94', () => 
    assert.equal(grade(94), 1.25));
    it('should return 1.25 for grade 95', () => assert.equal(grade(95), 1.25));
    it('should return 1.25 for grade 97', () => assert.equal(grade(97), 1.25));
});

describe('Grading System for 1.5', () => {
    it('should return 1.5 for grade 90', () => assert.equal(grade(90), 1.5));
    it('should return 1.5 for grade 91', () => assert.equal(grade(91), 1.5));
    it('should return 1.5 for grade 93', () => assert.equal(grade(93), 1.5));
});

describe('Grading System for 1.75', () => {
    it('should return 1.75 for grade 88', () => assert.equal(grade(88), 1.75));
    it('should return 1.75 for grade 88.5', () => assert.equal(grade(88.5), 1.75));
    it('should return 1.75 for grade 89', () => assert.equal(grade(89), 1.75));
});

describe('Grading System for 2.00', () => {
    it('should return 2.00 for grade 85', () => assert.equal(grade(85), 2.00));
    it('should return 2.00 for grade 86', () => assert.equal(grade(86), 2.00));
    it('should return 2.00 for grade 87', () => assert.equal(grade(87), 2.00));
});

describe('Grading System for 2.25', () => {
    it('should return 2.25 for grade 83', () => assert.equal(grade(83), 2.25));
    it('should return 2.25 for grade 83.5', () => assert.equal(grade(83.5), 2.25));
    it('should return 2.25 for grade 84', () => assert.equal(grade(84), 2.25));
});

describe('Grading System for 2.50', () => {
    it('should return 2.50 for grade 80', () => assert.equal(grade(80), 2.50));
    it('should return 2.50 for grade 81', () => assert.equal(grade(81), 2.50));
    it('should return 2.50 for grade 82', () => assert.equal(grade(82), 2.50));
});

describe('Grading System for 2.75', () => {
    it('should return 2.75 for grade 78', () => assert.equal(grade(78), 2.75));
    it('should return 2.75 for grade 78.5', () => assert.equal(grade(78.5), 2.75));
    it('should return 2.75 for grade 79', () => assert.equal(grade(79), 2.75));
});

describe('Grading System for 3.00', () => {
    it('should return 3.00 for grade 75', () => assert.equal(grade(75), 3.00));
    it('should return 3.00 for grade 76', () => assert.equal(grade(76), 3.00));
    it('should return 3.00 for grade 77', () => assert.equal(grade(77), 3.00));
});

describe('Grading System for below 75', () => {
    it('should return 5.00 for grade 69', () => assert.equal(grade(69), 5.00));
    it('should return 5.00 for grade 70', () => assert.equal(grade(70), 5.00));
    it('should return 5.00 for grade 74', () => assert.equal(grade(74), 5.00));
});