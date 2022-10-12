/* EXERCICE 2 */
const myFunctions = require("./main");
test("Substract 10 and 9", () => {
  expect(myFunctions.substractTwoNumbers(10, 9)).toBe(1);
});
test("Substract 10, 9 and null", () => {
  expect(() => {
    myFunctions.substractTwoNumbers(10, 9, null);
  }).toThrow(Error);
});
test("Multiply 2 and 22", () => {
  expect(myFunctions.multiplyTwoNumbers(2, 22)).toBe(44);
});
test("Multiply only null", () => {
  expect(() => {
    myFunctions.multiplyTwoNumbers(null);
  }).toThrow(Error);
});
test("Divide 10 and 5", () => {
  expect(myFunctions.divideTwoNumbers(10, 5)).toBe(2);
});
test("Divide 10 and 0", () => {
  expect(() => {
    myFunctions.divideTwoNumbers(10, 0);
  }).toThrow(Error);
});
test("Add 1, 4, 10 and 22", () => {
  expect(myFunctions.addNumbers([1, 4, 10, 22])).toBe(37);
});
