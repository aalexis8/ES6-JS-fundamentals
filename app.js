// Arrays & Array Methods

// Create some arrays
const numbers = [67, 34, 56, 73, 33, 44, 2];

// Creat using the array constructor
const numbers1 = new Array(23, 45, 56, 78, 12);

// Of course you can have an array of strings
const vegetables = ["zucchini", "broccoli", "Arugula", "Beets"];

// Unlike other languages, you can mixe types inside an array
const mixed = [25, "What's up", true, null, { a: 1, b: 2 }, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);

// Return an index
val = numbers[3];
val = numbers[0];

// Insert into array
numbers[2] = 203;

// Find index of value
val = numbers.indexOf(203);

// MUTATING ARRAYS
// Add on to end
numbers.push(207);

// Add to front
// numbers.unshift(207);
// numbers.pop();
// numbers.shift();

// Reverse the array
// numbers.reverse();

// numbers.splice(2, 1);

// Concat an array
val = numbers.concat(numbers1);

// Basic Sort
val = vegetables.sort();
val = numbers.sort();

// To sort by value, you need compare the values
// Currently it is sorting by index -- the default
// Too early to intro arrow functions .. but i threw it in.
// I would think I could omit the return keyword in this case.
// val = numbers.sort((x, y) => {
//   return x - y;
// });

val = numbers.sort(function (x, y) {
  return x - y;
});

// Reverse of the above sort
// val = numbers.sort((x, y) => {
//   return y - x;
// });

val = numbers.sort(function (x, y) {
  return y - x;
});

// Find
function under50(num) {
  return num < 50;
}

function over50(num) {
  return num > 50;
}
val = numbers.find(over50);
console.log(val);
console.log(numbers);
