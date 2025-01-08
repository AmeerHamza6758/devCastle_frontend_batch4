// console.log("Hello DOM");
// let heading = document.getElementById("heading");
// heading.style.background = "red";
// console.log(heading);

// Event Listners

// function xyz() {
//   heading.innerHTML = "Button is CLicked";
//   heading.style.background = "none";
//   heading.style.color = "red";
//   alert("This button is CLicked..");
// }

// Handle Error techniques

// const showError = document.getElementById("error");
// const errorHolder = {};
// function checkError() {
//   const a = 10;
//   const b = 50;
//   const sum = a + b;
//   console.log(sum, "This is the Total Amount");
//   if (sum > 50) {
//     console.error("Sum is greater than 50");
//     showError.innerHTML = "Error: Sum is greater than 50";
//     errorHolder.sumError = "Error: Sum is greater than 50";
//   } else {
//     showError.innerHTML = "";
//   }

//   console.log(errorHolder)
// }

// function checkError() {
//   const a = 10;
//   const b = 50;
//   b = 10;
//   const sum = a + b;
//   console.log(sum, "This is the Total Amount");
// }

// heading.addEventListener("click", () => {
//   heading.style.color = "blue";
// });

// Form Validation

// We will learn abou async/await and promises

function xyz() {
  try {
    console.log("first step");
    console.log("second step");
    console.log("third step");

    try {
      const b = 10;
      b = 10;
      console.log(b);
    } catch (error) {
      console.error(error.message);
    }

    console.log("fourth step");
    console.log("fifth step");
  } catch (error) {
    console.error("An error occurred", error);
  }
}

// xyz();

// settimeout
// console.log("First");

// setTimeout(() => {
//   const b = 10;
//   b = 329;
//   console.log("Middle");
// }, 10000);

// console.log("Third");

// async await
async function getData() {
  try {
    console.log("First-line");
    const response = await fetch("https://fakestoreapi.com/products/1");
    console.log(response);
    console.log("After");
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

getData();

console.log("Hello world");
