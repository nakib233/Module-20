// 12 inch 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const feetRemaining = inch % 12;
  return `${feetNumber} feet ${feetRemaining} inch`;
}

const shuvoHeight = inchToFeet2(75);
console.log(shuvoHeight);
