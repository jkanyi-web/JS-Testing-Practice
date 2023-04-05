/** @format */

const Calculator = require('./test3');

describe('Calculator.add test', () => {
  test("Adding positive numbers can't be zero", () => {
    const calculator = new Calculator(10, 10);
    expect(calculator.add()).not.toBe(0);
  });
  test("Adding positive numbers returns exact value", () => {
    const calculator = new Calculator(10, 10);
    expect(calculator.add()).toBe(20);
  });
  test("Adding positive numbers to return a true value", () => {
    const calculator = new Calculator(10, 10);
    expect(calculator.add()).toBeTruthy();
  });
})

describe('Calculator.subtract test', () => {
  test("Subtracting size differing numbers can't be zero", () => {
    const calculator = new Calculator(15, 10);
    expect(calculator.subtract()).not.toBe(0);
  });
  test("subtracting positive numbers returns exact value", () => {
    const calculator = new Calculator(15, 10);
    expect(calculator.subtract()).toBe(5);
  });
  test("Subtracting positive numbers to return a true value", () => {
    const calculator = new Calculator(15, 10);
    expect(calculator.subtract()).toBeTruthy();
  });
})

describe('Calculator.multiply test', () => {
  test("Multiplying positive numbers can't be zero", () => {
    const calculator = new Calculator(15, 10);
    expect(calculator.multiply()).not.toBe(0);
  });
  test('Multiplying positive numbers returns exact value', () => {
    const calculator = new Calculator(15, 10);
    expect(calculator.multiply()).toBe(150);
  });
  test('Multiplying positive numbers to return a true value', () => {
    const calculator = new Calculator(15, 10);
    expect(calculator.multiply()).toBeTruthy();
  });
})

describe('Calculator.divide test', () => {
  test("Dividing positive numbers can't be zero", () => {
    const calculator = new Calculator(20, 10);
    expect(calculator.divide()).not.toBe(0);
  });
  test('Dividing positive numbers returns exact value', () => {
    const calculator = new Calculator(30, 10);
    expect(calculator.divide()).toBe(3);
  });
  test('Dividing positive numbers to return a true value', () => {
    const calculator = new Calculator(20, 10);
    expect(calculator.divide()).toBeTruthy();
  });
})

