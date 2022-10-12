function validation(numberOfArguments, number1, number2) {
  if (numberOfArguments != 2) {
    throw new Error(`You need to pass ${numberOfArguments} numbers exactly`);
  }
  if (typeof number1 != "number" || typeof number2 != "number") {
    throw new Error("You need to pass numbers");
  }
}
function substractTwoNumbers(a, b) {
  validation(arguments.length, a, b);
  if (a < b) {
    throw new Error("First number needs to be bigger then the second one");
  } else {
    return a - b;
  }
}
function multiplyTwoNumbers(a, b) {
  validation(arguments.length, a, b);
  return a * b;
}
function divideTwoNumbers(a, b) {
  validation(arguments.length, a, b);
  if (b == 0) {
    throw new Error("You can't divide by zero");
  } else {
    return a / b;
  }
}
function addNumbers() {}
module.exports = {
  substractTwoNumbers,
  multiplyTwoNumbers,
  divideTwoNumbers,
  addNumbers,
};
