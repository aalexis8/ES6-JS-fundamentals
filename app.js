// Local & Session Storage, local storage data stays until user clears it out. Session storage is remove once the browser is closed.

// set local storage
// localStorage.setItem("name", "Alex");
// localStorage.setItem("age", 40);

// set session storage
// sessionStorage.setItem("name", "Alexis");

// get from storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");

// localStorage.removeItem("name");
// const name = localStorage.getItem("name");

// localStorage.clear();
// console.log(name, age);

// But this erase the previous item -- if you try to add another task
// document.querySelector("form").addEventListener("submit", function (e) {
//   const task = document.getElementById("task").value;
//   localStorage.setItem("task", task);
//   alert("Saved!!");

//   e.preventDefault();
// });

// Fixing that by creating an array of string to store things in as needed
document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;

  let tasks; // our array variable

  if (localStorage.getItem("tasks") === null) {
    tasks = []; // create our empty array and await items
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  // we are adding items to tasks
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Saved!!");

  e.preventDefault();
});

// Trying to read from that array keep in mind the need to parse
const tasks = JSON.parse(localStorage.getItem("tasks"));

// tasks.forEach((element) => {
//   console.log(element);
// });

tasks.forEach(function (task) {
  console.log(task);
});
