const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");

// Clear input (clears the forms input value after submit)
// Which means you would normally run this after a submit, not here
taskInput.value = "";

// form.addEventListener("submit", runEvent);

// Keydown
// taskInput.addEventListener("keydown", runEvent);
// // Keypress
// taskInput.addEventListener("keypress", runEvent);
// // Keyup
// taskInput.addEventListener("keyup", runEvent);
// taskInput.addEventListener("focus", runEvent);
// taskInput.addEventListener("blur", runEvent);
// Cut
// taskInput.addEventListener("cut", runEvent);
// // Paste
// taskInput.addEventListener("paste", runEvent);

// taskInput.addEventListener("input", runEvent);

select.addEventListener("change", runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value);

  // heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);
  // e.preventDefault();
}
