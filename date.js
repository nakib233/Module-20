const today = new Date();
const date = new Date("2062-10-09");
console.log(date);

const specificDate = new Date(2091, 0, 26); // here 0 index means January
console.log(specificDate);

specificDate.setMonth(10); // here 10 is an index..
console.log(specificDate.toLocaleDateString());
console.log(specificDate.toLocaleDateString("en-GB"));
