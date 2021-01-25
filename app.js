// String Methods & Concatenation
const firstName = "William";
const lastName = "Henry";
const age = 45;
const str = "Hello there, my name is Al";
const tags = "web design, web development, programming";

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "Slim ";
val += "Shady";

val = "Hello, my name is: " + firstName + "and I am " + age;

// Escaping

val = "That's awesome, I can't wait";

// Properties and Methods available on string

// Length
val = firstName.length; // This is a property, not a method, so no ()

// concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = lastName.toLocaleLowerCase();

val = lastName[3];

// indexOf()
val = firstName.indexOf("l");
val = lastName.lastIndexOf("r");

// charAt()
val = firstName.charAt("3");

// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(" ");
val = tags.split(",");

// replace()
val = str.replace("Al", "Alex");

// Includes()
val = str.includes("Hello"); // This is case sensitive
console.log(val);
