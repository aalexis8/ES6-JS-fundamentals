// defining your variables --
// three available keywords -- var, let, const
// let and const are newer, var has quirks you need to keep in mind.

// creating a varibale
// var name = "Alvin";
// console.log(name);
// name = "Kraven";
// console.log(name);

// Initializing your vars, or else they are undefined.
// var greeting;
// console.log(greeting);
// greeting = "What's good";
// console.log(greeting);

// rules for variable names -- letters, numbers, _, $
// Cannot start with number
// var _name = "Jason";

// // Multi word vars , camel case
// var firstName = "John"; // Camel Case
// var first_name = "Conners"; // underscore
// var FirstName = "Eddie";// Pascal case

// Let and Scope, the block scoping variables
// For now remember that let basically works like var --
// We wont talk about scope yet.

// LET
// let name;
// let name = "Alvin";
// console.log(name);
// name = "Kraven";
// console.log(name);

// CONST -- variables declared with const, can't be re-assigned a new value. They can't change value, once assigned. And they can't be declared without a value (can't do const name; needs a value)

const name = "Anything even empty string";
console.log(name);
// cannot reassign
// name = "Something new"; // not permitted
// And require a value at declaration.
//const greeting; //  Missing initializer in const declaration

// Keep in mind value inside a const object can change.
// Take this object literal
const person = {
  name: "Jason",
  age: 200,
};

// We can change the value of the key name or age
person.name = "Voorheese";
person.age = 300;

console.log(person); //

const anotherperson = { name: "Freddy" };
// can't assign person to a new or other person.
// person = anotherperson;

/* ---------- */
const numbers = [1, 2, 3, 4, 5];
// we can use the array methods to add items to this array
numbers.push(6);
console.log(numbers);

// But we can't re-assign array to a new set of numbers
numbers = [];
