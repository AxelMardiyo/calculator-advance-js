import ScientificCalculator from "./ScientificCalculator.js";
import Display from "./Display.js";
import ButtonHandler from "./ButtonHandler.js";

document.addEventListener("DOMContentLoaded", () => {
  const displayElement = document.getElementById("display");
//   displayElement.innerText = "100";
  const display = new Display(displayElement);

  const calculator = new ScientificCalculator(display);
  const buttonHandler = new ButtonHandler(calculator);

  document.querySelectorAll(".button").forEach((button) => {
    const value = button.getAttribute("data-value");

    button.addEventListener("click", () => {
      buttonHandler.handleButton(value);

    });
  });
});
