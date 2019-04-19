const assert = require('assert');
const calculator = require('./stringCalculator');

describe('String Calculator add', function () {

  it('should return 0 for empty string', function () {
    let actual = calculator.add('');
    assert.equal(actual, 0);
  });

  it('should return the number if single number', function () {
    let data = [
      { input: '1', expected: 1 },
      { input: '11', expected: 11 },
      { input: '-1', expected: -1 },
      { input: '3', expected: 3 },
    ];
    data.forEach((current, index, array) => {
      let actual = calculator.add(current.input);
      assert.equal(actual, array[index].expected);
    });
  });

  it('should return the sum of two numbers', function() {
    assert.equal(calculator.add('1,2'), 3);
    assert.equal(calculator.add('-1,2'), 1);
  });

  it('should return the sum of many numbers', function() {
    assert.equal(calculator.add('1,2,3'), 6);
    assert.equal(calculator.add('-1,2,8,10'), 19);
  });

  it('should return the sum of numbers with new line delimiter', function() {
    assert.equal(calculator.add('1\n2\n3,4'), 10);
  });
  
  it('should return the sum of numbers with custom delimiter', function() {
    assert.equal(calculator.add('//;\n1;2;3,4'), 10);
  });
});