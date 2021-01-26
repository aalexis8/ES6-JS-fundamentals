// Template literals, template strings part of es6, but compatible with all browsers.

// here some variables
const name = "Doe";
const age = 28;
const job = "Software Developer";
const city = "Arizona";

let html;

// Without template strings (es5)
html =
  "<ul><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  " </li><li>Job: " +
  job +
  "</li><li>City: " +
  city +
  " </li></ul>";

function hello() {
  return "Hello";
}

// With template literals, template strings, we can evaluate expressions and etc...
html = `
   <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 5}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? "Over 30" : "Under 30"}</li>
   </ul>

`;

// then add this html to the DOM
document.body.innerHTML = html;
