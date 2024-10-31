export default class ButtonHandler {
  constructor(calculator) {
    this.calculator = calculator;
  }

  handleButton(value) {
    if (!isNaN(value) || value === ".") {
      this.calculator.append(value);
    } else if (value === "AC") {
      this.calculator.clear();
    } else if (value === "+/-") {
      this.calculator.toggleSign();
    } else if (value === "%") {
      this.calculator.percent();
    } else if (value === "√") {
      this.calculator.squareRoot();
    } else if (value === "x²") {
      this.calculator.square();
    } else if (value === "π") {
      this.calculator.pi();
    } else if (value === "e") {
      this.calculator.e();
    } else if (value === "(") {
      this.calculator.openBracket();
    } else if (value === ")") {
      this.calculator.closeBracket();
    } else if (value === "=") {
      this.calculator.calculate();
    } else {
      this.calculator.append(value);
    }
  }
}
