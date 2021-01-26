// Single element DOM Selectors the two single -- element selectors

// document.getElementById()

// console.log(document.getElementById("task-title"));

// Of course you can save task-title in a variable and save some typing
// const taskTitle = document.getElementById("task-title");
// Get elements' attributes
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

// Change Styling
// document.getElementById("task-title").style.background = "#333";
// document.getElementById("task-title").style.color = "#fff";
// document.getElementById("task-title").style.padding = "5px";
// taskTitle.style.background = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";

// Change content
// document.getElementById("task-title").textContent = "Task List";
// document.getElementById("task-title").innerText = "My Task";
// document.getElementById("task-title").innerHTML =
//   '<span style="color:red"> Task List</span>';
// taskTitle.textContent = "Task List";
// taskTitle.innerText = "My Task";
// taskTitleinnerHTML = '<span style="color:red"> Task List</span>';

// The newer more powerful selector is querySelector()
// Able to select by more than just id, takes any css selector
// document.querySelector()
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5")); // returns the first h5 found
document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "blue";

document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3").style.color = "yellow";
document.querySelector("li:nth-child(4)").textContent = "Hello World";
document.querySelector("li:nth-child(odd)").style.background = "#ccc"; // only the first odd is changed, because this is a single selector
