// console.log("Hello Console");

const numm1 = 100;
const num2 = 200;

// if (numm1 < num2 && num2 > numm1) {
//   console.log("Num2 is greater than num1");
// } else {
//   console.log("Num1 is greater than num2");
// }

// Functions
//  function multiplyNumbers(){

//  }

// const multiplyNumbers = ()=>{

// }

function multiplyNumbers(price1, price2) {
  const totalPrice = price1 + price2;
  console.log("The total Price is " + totalPrice);
  return totalPrice;
}

multiplyNumbers(50, 50);

function ageCalculator(age) {
  const oldAge = new Date(age);
  console.log(oldAge, "this is Old Age");
  const currentDate = new Date();
  console.log(currentDate);
  const totalAge = currentDate.getFullYear() - oldAge.getFullYear();
  console.log("Your age is " + totalAge);
}

ageCalculator("2004-09-18");


