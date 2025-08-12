/**
 * Function takes an array as a parameter
 * Give me the average of the odd numbers in the array...
 */

// This is my attempt😊

function arrayOdd(array) {
  let emptyString = [];
  let sum = 0;
  for (let i of array) {
    if (i % 2 !== 0) {
      emptyString += 1;
      sum = sum + i;
    }
  }
  return sum / emptyString.length;
}

console.log(`the result is ${arrayOdd([12, 13, 14, 37, 89])}`);
