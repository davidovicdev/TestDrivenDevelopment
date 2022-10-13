/* EXERCICE 2 */
const myFunctions = require("./main");
/* Substract */
test("Substract 10 and 9", () => {
  expect(myFunctions.substractTwoNumbers(10, 9)).toBe(1);
});
test("Substract 10, 9 and null", () => {
  expect(() => {
    myFunctions.substractTwoNumbers(10, 9, null);
  }).toThrow(Error);
});
/* Multiply */
test("Multiply 2 and 22", () => {
  expect(myFunctions.multiplyTwoNumbers(2, 22)).toBe(44);
});
test("Multiply only null", () => {
  expect(() => {
    myFunctions.multiplyTwoNumbers(null);
  }).toThrow(Error);
});
/* Divide */
test("Divide 10 and 5", () => {
  expect(myFunctions.divideTwoNumbers(10, 5)).toBe(2);
});
test("Divide 10 and 0", () => {
  expect(() => {
    myFunctions.divideTwoNumbers(10, 0);
  }).toThrow(Error);
});
/* Add numbers */
test("Add 1, 4, 10 and 22", () => {
  expect(myFunctions.addNumbers(1, 4, 10, 22)).toBe(37);
});
test("Add 1, null, 10 and 22", () => {
  expect(() => {
    myFunctions.addNumbers(1, null, 10, 22);
  }).toThrow(Error);
});
test("Add with no parameters", () => {
  expect(() => {
    myFunctions.addNumbers();
  }).toThrow(Error);
});

test("Add with strings 1, 2, 3, 4 and 5", () => {
  expect(() => {
    myFunctions.addNumbers("1", "2", "3", "4", "5");
  }).toThrow(Error);
});

/* Exercise 4 */

const array1 = myFunctions.analyzeArray([1, 2, 3, 4, 5]);
test("Analyze array of 1, 2, 3, 4, 5", () => {
  expect(array1.numberOfElements).toBe(5);
  expect(typeof array1).toBe("object");
  expect(array1.averageValue).toBe(3);
  expect(array1.minimumValue).toBe(1);
  expect(array1.maximumValue).toBe(5);
});
test("Analyze array expecting errors", () => {
  expect(() => {
    arraymyFunctions.analyzeArray([1, null, "zika", undefined]);
  }).toThrow(Error);
  expect(() => {
    arraymyFunctions.analyzeArray([1, null, "zika", undefined], 2, "zika");
  }).toThrow(Error);
  expect(() => {
    arraymyFunctions.analyzeArray();
  }).toThrow(Error);
});
