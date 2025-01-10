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
  if (i == 7 || i == 8) {
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

// QUIZ QUESTIONS

// 1. Write a JavaScript code to that multipy array numbers with 5. array =[10,20,30,40,50,60,70,80,90,100]
// 2. Write a JavaScript code to break each word where is space. paragraph = Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
//       recusandae, tempora accusantium atque eos laboriosam cumque suscipit.
//       Incidunt possimus rerum laudantium illum, rem voluptatum distinctio,
//       quidem, quis placeat hic ea.

// 3. write a program add your name in teachersName array and check yourname is available in array if available then say hello to youself in console.
//4. write a program that will print all the information of the userName and check if his salary is less than 20000 then skip the salary to print
//5. write a program that will print all key value pairs of the teacher. tracherObject ={ name:'Ali', email:'ali@email.com',hobby:'internet',DOB:'12-12-2000}
//6. write a program that will give even numbers from an array(use filter).
//7. write a program that will subtract 200 from dress pricess and if dress price is less than 500 then don't subtract. dressPrice=[500,1000,50000,3000,600,400,2000] (use Map)
//8. I have two different buckets, I want to join it and make one bucket how it is possible?
//9. write a program that will seperate array items with (-) this.
//10. write a program when I click on the button  Hello, it'll display "Hello (yourName)".
//11. get data using fetch method, create async function and print response data in json format.

const employe = {
  name: "Ameer Hamza",
  age: 50,
  email: "hamza@gmail.com",
  department: "IT",
  salary: 100,
  hobby: "Internet",
  designation: "Computer Science",
};

for (let key in employe) {
  if (key == "salary" && employe[key] < 200) {
    continue;
  }
  console.log(`Key ${key}, ==== values ${employe[key]}`);
}
