/* [Exercise] Using TDD implement other functions for:
Subtracting two numbers
Multiplication of two numbers
Dividing two numbers
Addition a few numbers in one call (call addCalculator with more than 2 arguments and get correct result) */
const myFunctions = require("./main");
test("Substract two numbers", () => {
  expect(myFunctions.substract(6, null)).toBe(myFunctions.MESSAGE_ONLY_NUMBERS);
});
test("Multiplication of two numbers", () => {
  expect(myFunctions.multiple(2, 3)).toBe(6);
});
test("Dividng two numbers", () => {
  expect(myFunctions.dividingTwoNumbers(6, 2)).toBe(3);
});
test("Add more numbers", () => {
  expect(myFunctions.addNumbers(2, 3, "pera")).toBe(
    myFunctions.MESSAGE_ONLY_NUMBERS
  );
});
test("Add more numbers", () => {
  expect(myFunctions.addNumbers(14, 2, null, undefined, "zika")).toBe(
    myFunctions.MESSAGE_ONLY_NUMBERS
  );
});
/* 3. [Exercise] Write new tests that use already implemented functions, but also handle edge cases and possible issues:
Add handling error that will occur when function is called with only 1 parameter, or without any parameters (all currently existing functions)
Add handling error that will occur when function for dividing is called with second parameter 0 (when you try to divide by 0)
Add handling error that will occur when one of multiplication parameters is string */
test("Add more numbers", () => {
  expect(myFunctions.addNumbers()).toBe(myFunctions.MESSAGE_AT_LEAST_MY_NUMBER);
});
test("Dividng two numbers", () => {
  expect(myFunctions.dividingTwoNumbers(2, 0)).toBe(
    myFunctions.MESSAGE_CANT_BE_ZERO
  );
});
test("Multiplication of two numbers", () => {
  expect(myFunctions.multiple(2, "PERA")).toBe(
    myFunctions.MESSAGE_ONLY_NUMBERS
  );
});
/* 4. [Exercise] Using TDD implement function (you can use more private functions to separate logic) for analyze an array of numbers.
Function takes an array of numbers, analyze it, and return object that has information about number of elements, average value of elements, maximum and minimum value. Implement handling error that function throw if one of elements is string, or undefined. */
var analyzeObjectStatistic = myFunctions.arrayFunctions([1, 2, null, 4, 5]);
test("Jokes with array of numbers", () => {
  expect(analyzeObjectStatistic.averageValue).toBe(3);
  expect(analyzeObjectStatistic.minimumValue).toBe(1);
  expect(analyzeObjectStatistic.maximumValue).toBe(5);
});
