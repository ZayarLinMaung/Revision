const display = document.querySelector(".display");
function appendToDisplay(val) {
  display.value += val;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  display.value = eval(display.value);
}
