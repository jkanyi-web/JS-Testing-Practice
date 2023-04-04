/** @format */

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add = () => this.a + this.b;

  subtract = () => this.a - this.b;

  multiply = () => this.a * this.b;

  divide = () => {
    if (this.b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return this.a / this.b;
  };
}

const calculator = new Calculator(10, 10);
console.log(calculator.add()); // logs 20
