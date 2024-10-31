export default class BasicCalculator {
  constructor(display) {
    if (new.target === BasicCalculator) {
      throw new TypeError(
        "Cannot construct BasicCalculator instances directly"
      );
    }

    this.display = display;
  }

  append(value) {
    this.display.value =
      this.display.value === "0" ? value : this.display.value + value;
  }

  clear() {
    this.display.clear();
  }

  toggleSign() {
    this.display.value = this.display.value.startsWith("-")
      ? this.display.value.slice(1)
      : `-${this.display.value}`;
  }

  calculate() {
    try {
      this.display.value = eval(this.display.value);
    } catch (error) {
      this.display.value = "Error";
    }
  }
}
