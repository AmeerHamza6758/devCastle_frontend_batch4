// console.log('Today we will study LOOPS')

// // While Loop

// while(condition){
// // body
// }

// // do-while

//     do{
//     // body
//     } while(condition);

// // For Loop
// for(initial value ; condition; ++){
//     //Body
// }

// // for-in-loop
// for(let key in object){
//     // body
// }

// // for-of-loop
// for(let value of array){
//     // body
// }

// console.log(20)
const marketPrice = [10, 20, 40, 60, 230, 30];

let startNum = 1;
const endNum = 10;

// while (startNum <= endNum) {
//   console.log(startNum, "This is Starting Number");
//   startNum++;
// }

// do-while Loop

let first = 1;
let second = 20;
let total = 0;

// do {
//   total = first * second;
//   console.log(second, "*", first, "Total= ", total);
//   first++;
// } while (first <= second);

// For loop
for (let i = 1; i <= 10; i++) {
  // body
  if (i == 7 || i==8) {
    continue;
  }
  console.log(i, "This is Starting Number");
}

//  For-in-Loop
const employee = {
  name: "Ameer Hamza",
  age: 50,
  email: "hamza@gmail.com",
  department: "IT",
  contact: 9988838,
  hobby: "Internet",
  designation: "Computer Science",
};

// for (let key in employee) {
//   console.log(`${key}====== ${employee[key]}`);
// }

// For-of-Loop
const teachersName = [
  "M.Usman",
  "M.Khalid",
  "Ms.sadia",
  "Ms.Sumbal",
  "Mr.Faaz",
];

// for (let k of teachersName) {
//   console.log(`Hello ${k}`);
// }

// Calculate ther price of dresses after 25% OFF

let dressPrice = [1000, 2000, 4500, 5000, 6000, 15000, 500000];

const discount = 0.25;

// for (let key of dressPrice) {
//   let discountedPrice = key - key * discount;
//   console.log(discountedPrice, "The discounted price");
// }

console.log("Hello world-1");
// console.log("Hello world-1")
// console.log("Hello world-1")
// console.log("Hello world-1")
// console.log("Hello world-1")
// console.log("Hello world-1")
// console.log("Hello world-1")
