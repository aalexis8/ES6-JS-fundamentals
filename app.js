// FUNCTION DECLARATIONS
// function greet() {
//   // console.log("Hello");
//   return "Hello";
// }
// Now we console.log here at the function call
// console.log(greet());

//TAKING PARAMETERS (INPUT TO OUR FUNCTION)
function greet(firstName) {
  // now we can use the parameter/input in our function to do work
  return "Hello " + firstName;
}

// MULTIPLE PARAMATERS
function greet(firstName, lastName) {
  // now we can use the parameter/input in our function to do work
  return "Hello " + firstName + " " + lastName;
}

// DEFAULT VALUE PARAMETER, IN CASE IT IS CALLED WITHOUT A VALUE
// BEFORE ES6
// function greet(firstName, lastName) {
//   if (typeof firstName === "undefined") {
//     firstName = "John";
//   }
//   if (typeof lastName === "undefined") {
//     lastName = "Dough";
//   }
//   return "Hello " + firstName + " " + lastName;
// }

// AFTER ES6 NOW DEFAULT VALUES CAN BE HANDLE LIKE THE FOLLOWING
function greet(firstName = "John", lastName = "Dough") {
  return "Hello " + firstName + " " + lastName;
}

// Calling without passing a value
// console.log(greet());
// Now we can pass in a value when calling the function
// console.log(greet("Alvin", "Chipmunk"));

// FUNCTION EXPRESSIONS -- a function as a variable assignment
// In such situation usually the function is anonymous

const cube = function (x) {
  return x * x * x;
};

// console.log(cube(3));

// IMMEDIATELY INVOKABLE FUNCTIONS EXPRESSIONS -- IIFEs (isn't that an E40 song lol) -- declare and run at once
(function () {
  console.log("if you dig it, I dug it");
});

// Nothing happens in the above function because we have no called the function yet. See below : we call it by adding another set of parenthesis
// (function () {
//   console.log("if you dig it, I dug it");
// })();

// can be parameterized like any other functions
// (function (name) {
//   console.log("my swisher " + name);
// })("E40");

// PROPERTY METHODS -- functions inside an object is called a method
const todo = {
  add: function () {
    console.log("Add todo...");
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log("Deleting todo...");
};
todo.add();
todo.edit(34);
todo.delete();
