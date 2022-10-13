function validationForTwoParameters(numberOfArguments, number1, number2) {
  if (numberOfArguments != 2) {
    throw new Error(`You need to pass 2 numbers exactly`);
  }
  if (typeof number1 != "number" || typeof number2 != "number") {
    throw new Error("You need to pass numbers");
  }
}
function substractTwoNumbers(a, b) {
  validationForTwoParameters(arguments.length, a, b);
  if (a < b) {
    throw new Error("First number needs to be bigger then the second one");
  } else {
    return a - b;
  }
}
function multiplyTwoNumbers(a, b) {
  validationForTwoParameters(arguments.length, a, b);
  return a * b;
}
function divideTwoNumbers(a, b) {
  validationForTwoParameters(arguments.length, a, b);
  if (b == 0) {
    throw new Error("You can't divide by zero");
  } else {
    return a / b;
  }
}
function addNumbers() {
  if (arguments.length == 0) {
    throw new Error("You need to pass at least one number");
  } else if (Array.from(arguments).some((x) => typeof x != "number")) {
    throw new Error("All parameters must be number");
  } else {
    var total = 0;
    Array.from(arguments).forEach((number) => {
      total += number;
    });
    return total;
  }
}
function analyzeArray(arrayOfNumbers) {
  if (arguments.length != 1) {
    throw new Error("You need to pass exactly one parameter");
  } else if (typeof arrayOfNumbers == "array") {
    throw new Error("You need to pass array");
  } else if (arrayOfNumbers.some((x) => typeof x != "number")) {
    throw new Error("All elements of array must be number");
  } else {
    var object = {};
    object.numberOfElements = arrayOfNumbers.length;
    object.averageValue =
      arrayOfNumbers.reduce((a, b) => a + b, 0) / arrayOfNumbers.length || 0;
    object.maximumValue = Math.max(...arrayOfNumbers);
    object.minimumValue = Math.min(...arrayOfNumbers);
    return object;
  }
}
function getChange(totalPrice, paidAmount) {
  if (arguments.length != 2) {
    throw new Error("You need to pass exactly 2 parameters");
  } else if (typeof totalPrice != "number" || typeof paidAmount != "number") {
    throw new Error("Both parameters need to be number");
  } else if (totalPrice > paidAmount) {
    throw new Error("You need more money");
  } else {
    var coins = [1, 2, 5, 10, 20, 50, 100, 200];
    var difference = paidAmount - totalPrice;
    var change = [];
    while (difference != 0) {
      for (let i = coins.length - 1; i == 0; i--) {
        if (difference >= coins[i]) {
          change.push(coins[i]);
          difference -= coins[i];
          break;
        }
      }
    }
    return change;
  }
}
module.exports = {
  substractTwoNumbers,
  multiplyTwoNumbers,
  divideTwoNumbers,
  addNumbers,
  analyzeArray,
  getChange,
};
