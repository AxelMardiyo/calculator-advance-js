import BasicCalculator from "./BasicCalculator.js";

export default class ScientificCalculator extends BasicCalculator {
  calculate() {
    const expression = this.display.value;
    const lastChar = expression.slice(-1);

    if (/[+\-*/.]/.test(lastChar)) {
      alert("Invalid expression");
      return;
    }

    try {
      const result = eval(expression);
      this.display.value = Number.isInteger(result)
        ? result.toString()
        : parseFloat(result).toFixed(5).toString();
    } catch (error) {
      alert("Invalid expression");
    }
  }

  squareRoot() {
    const currentValue = parseFloat(this.display.value);
    if (currentValue >= 0) {
      this.display.value = Math.sqrt(currentValue).toString();
    } else {
      alert("Cant calculate square root of negative number");
    }
  }

  square() {
    const currentValue = parseFloat(this.display.value);
    if (currentValue >= 0) {
      this.display.value = Math.pow(currentValue, 2).toString();
    } else {
      alert("Cant calculate square of negative number");
    }
  }

  pi() {
    this.display.value = Math.PI.toFixed(2).toString();
  }

  e() {
    this.display.value = Math.E.toString();
  }
  openBracket() {
    if (this.display.value === "0" || /[+\-*/.]/.test(this.display.value)) {
      this.append("(");
    }
  }

  closeBracket() {
    const openParens = (this.display.value.match(/\(/g) || []).length;
    const closeParens = (this.display.value.match(/\)/g) || []).length;
    if (openParens > closeParens && !/[+\-*/(]$/.test(this.display.value)) {
      this.append(")");
    }
  }

  appendWithMultiplier(value) {
    if (this.display.value !== "0") {
      this.append("*" + value);
    } else {
      this.append(value);
    }
  }
}
