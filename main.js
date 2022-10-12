/* 1. [Exercise] Using TDD implement other functions for:
Subtracting two numbers
Multiplication of two numbers
Dividing two numbers
Addition a few numbers in one call (call addCalculator with more than 2 arguments and get correct result) */

/* 2. [Exercise] Write new tests that use already implemented functions, but also handle edge cases and possible issues:
Add handling error that will occur when function is called with only 1 parameter, or without any parameters (all currently existing functions)
Add handling error that will occur when function for dividing is called with second parameter 0 (when you try to divide by 0)
Add handling error that will occur when one of multiplication parameters is string */
const MESSAGE_ONLY_NUMBERS = "You can pass only numbers";
const MESSAGE_AT_LEAST_MY_NUMBER = "You need to pass at least one number";
const MESSAGE_CANT_BE_ZERO = "You can't divide by zero";
const MESSAGE_ARRAY_OF_NUMBERS = "You need to pass a array of numbers";
function isNumber(a) {
  return typeof a == "number" ? true : false;
}
function substract(a, b) {
  return isNumber(a) && isNumber(b) ? a - b : MESSAGE_ONLY_NUMBERS;
}
function multiple(a, b) {
  return isNumber(a) && isNumber(b) ? a * b : MESSAGE_ONLY_NUMBERS;
}
function dividingTwoNumbers(a, b) {
  if (b == 0) {
    return MESSAGE_CANT_BE_ZERO;
  }
  return isNumber(a) && isNumber(b) ? a / b : MESSAGE_ONLY_NUMBERS;
}
function addNumbers() {
  var total = 0;
  if (arguments.length > 0) {
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] != "number") {
        return MESSAGE_ONLY_NUMBERS;
      }
      total += arguments[i];
    }
  } else {
    return MESSAGE_AT_LEAST_MY_NUMBER;
  }
  return total;
}
/* 4. [Exercise] Using TDD implement function (you can use more private functions to separate logic) for analyze an array of numbers.
Function takes an array of numbers, analyze it, and return object that has information about number of elements, average value of elements, maximum and minimum value. Implement handling error that function throw if one of elements is string, or undefined. */
function arrayFunctions(arrayOfNumbers) {
  if (
    arguments.length != 1 ||
    typeof arrayOfNumbers != "object" ||
    arrayOfNumbers.some((x) => typeof x != "number")
  ) {
    return MESSAGE_ARRAY_OF_NUMBERS;
  } else {
    var object = {};
    var averageValue = 0;
    arrayOfNumbers.forEach((number) => {
      averageValue += number;
    });
    object.countNumbers = arrayOfNumbers.length;
    object.averageValue = averageValue / arrayOfNumbers.length;
    object.minimumValue = Math.min(...arrayOfNumbers);
    object.maximumValue = Math.max(...arrayOfNumbers);
  }
  return object;
}
module.exports = {
  substract,
  multiple,
  dividingTwoNumbers,
  addNumbers,
  arrayFunctions,
  MESSAGE_AT_LEAST_MY_NUMBER,
  MESSAGE_ONLY_NUMBERS,
  MESSAGE_CANT_BE_ZERO,
  MESSAGE_ARRAY_OF_NUMBERS,
};
