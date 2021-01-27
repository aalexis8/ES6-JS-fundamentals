// Mouse Events
const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// Click
// clearBtn.addEventListener("click", runEvent);

// Doubleclick
// clearBtn.addEventListener("dblclick", runEvent);

// Mousedown
// clearBtn.addEventListener("mousedown", runEvent);

// Mouseup
// clearBtn.addEventListener("mouseup", runEvent);
// Mouseenter
// clearBtn.addEventListener("mouseenter", runEvent);
// card.addEventListener("mouseenter", runEvent);
// // Mouse Leave
// card.addEventListener("mouseleave", runEvent);

// // Mouseover
// card.addEventListener("mouseover", runEvent);
// // Mouseout
// card.addEventListener("mouseout", runEvent);

// Mouse move
card.addEventListener("mousemove", runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 80)`;
}
