let a = 5;
let b = 7;

const temp = a;
a = b;
b = temp;

console.log(a, b);

// ------------------>

let x = "nakib";
let y = 7;

[x, y] = [y, x];
console.log(x, y);

//----------------->

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
