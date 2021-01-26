// If statements and comparison operators
// if(condition is met) {
//    do
// } else {
//   do other thing
// }

const id = 100;
// let id;

// EQUAL TO
// if (id == 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// NOT EQUAL TO
// if (id != 101) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// EQUAL TO VALUE AND TYPE
// if (id === 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// NOT EQUAL TO VALUE AND TYPE
// if (id !== 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// TESTING FOR UNDEFINED INCORRECT WAY, NOT FOUND
// if (id) {
//   console.log(`The ID is: ${id}`);
// } else {
//   console.log("NO ID");
// } // BUT IT IS NOT FOUND IS DIFFERENT FROM UNDEFINED

// THE CONTEXT OF WHAT HE IS TRYING TO ACCOMPLISH
// if (typeof id !== "undefined") {
//   console.log(`The ID is:  ${id}`);
// } else {
//   console.log("NO ID");
// } // if id was declared and we have no value, we still get NO ID
// So testing if a variable is non-existant as opposed to testing if a variable is undefined. I think that's worth pointing out.

// GREATER THAN OR LESS THAN
// if (id > 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// IF ELSE
const color = "green";

// if (color === "vert") {
//   console.log("Color is red");
// } else if (color === "blue") {
//   console.log("Color is blue");
// } else {
//   console.log("Color is not red or blue");
// }

// LOGICAL OPERATORS
const name = "Smith";
const age = 20;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR --
console.log(id === 100 ? "CORRECT" : "INCORRECT");

//
