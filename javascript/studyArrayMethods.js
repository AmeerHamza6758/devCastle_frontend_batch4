// let dressPrice = Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
let dressPrice = [2, 3, 4, 5, 6, 7, 8, 9];
// dressPrice[2]=5
// dressPrice.unshift(10)
// dressPrice.shift()
// dressPrice.pop()
// dressPrice.splice(3,2)
// const testArray = dressPrice.includes(5,3);
// console.log(testArray, "This is the value");
// const testArray = dressPrice.join('*');
// console.log(testArray);

// console.log(dressPrice.length);

// Concat two arrays
// let firstArray = [1, 2, 3, 4];
// let secondArray = [5, 6, 7, 8];

// let combinedArray = firstArray.concat(secondArray);
// console.log(combinedArray);

// Map Method

const studentFee = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let totalStudentFee = studentFee.map((item, index) => {
  return item * 2;
});

console.log(studentFee);
console.log(totalStudentFee);

// Filter methods
const countingNums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
];

const evenNums = countingNums.filter((num) => num % 2 === 0);
console.log(evenNums);
