// Global Scope
var a = 1;
let b = 2;
const c = 3;

// Now inside a function, function scope
// function test() {
//   var a = 6;
//   let b = 7;
//   const c = 8;
//   console.log("Function Scope: ", a, b, c);
// }

// test();

// Block Level Scope, anything inside of curly braces.
// if (true) {
//   // Block scope
//   var a = 4; // var changes a globally here
//   let b = 5;
//   const c = 6;
//   console.log("Block level: ", a, b, c);
// } // let and const were added to allow level scoping. Fixing some of js weirdness

// let and const have block level scope
// while var has function scope -- that if it is not contained by a function it will be global
console.log("Global Scope: ", a, b, c);
