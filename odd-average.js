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

// By Jhankar Mahbub

/**
 * Putting Odd numbers in an array...
 */

function oddAverage(numbers) {
  const odd = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odd.push(number);
    }
  }
  //   odd is the array that only contains only the odd numbers
  console.log(odd);
  let sum = 0;
  for (const i of odd) {
    sum = sum + i;
  }
  result = sum / odd.length;
  console.log(odd.length);
  return result;
}

const numbers = [42, 13, 58, 65, 81, 9, 7];
const avg = oddAverage(numbers);
console.log(`average of the number is : ${avg}`);
