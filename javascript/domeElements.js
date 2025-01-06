console.log("Hello DOM");
let heading = document.getElementById("heading");
heading.style.background = "red";
console.log(heading);

// Event Listners

function xyz() {
  heading.innerHTML = "Button is CLicked";
  heading.style.background = "none";
  heading.style.color = "red";
  alert('This button is CLicked..')
}

// heading.addEventListener("click", () => {
//   heading.style.color = "blue";
// });

// Form Validation
