/***
 * Year will be a leap year if the year is divisible by 4
 */

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  }
  return false;
}
const isLipi = isLeapYear(2023);
// console.log(isLipi);

/**
 * 1.Those year that is not divisible by 100, if the year is divisible by 4, then it will be a leap year..
 *
 */

function isLeapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  }
  return false;
}

console.log(isLeapYear2(2002));
