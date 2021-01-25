// Taking a look at type conversion -- before we talk about coercion

let val;

// Number to string
//val = 5;
val = String(534);
val = String(4 + 5);

// Bool to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1, 2, 3, 4]);

// toString() -- what's the difference, if any?
val = (3).toString();
val = false.toString();

// String number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello");
val = Number([3, 4, 5, 6, 8]);

val = parseInt("100");
val = parseFloat("132.34");

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length); // now val has a length
console.log(val.toFixed());

// Type Coercion
const val1 = String(5);
const val2 = 7;

const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);
