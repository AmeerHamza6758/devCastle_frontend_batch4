const studenName = {
  name: "John Doe",
  email: "john.doe@gmail.com",
  age: 25,
  grade: "A",
  subjects: ["Math", "Science", "English"],
};

// studenName["hobby"] = "Football";
// delete studenName.age;
// studenName.grade = "B";
// Object.freeze(studenName);

studenName.hobby = "Football";
console.log(studenName, "This is Student Object");

// String Methods
const firstName = "Ameer";
const lastName = "Hamza";

// const fullName = firstName + lastName;

// console.log(firstName.includes('z'))
// console.log(firstName.indexOf('r'))
let paragraph =
  "Hello World d takes a separator argument and breaks a string up, according to the occurrence of the separator character inside the string. Then, it returns an array of strings.";

// paragraph.split(" ");
console.log(paragraph.startsWith("takes"));

const myContact = 3048565638383;

const ty = myContact.toString();
const tz = 12;
const total = tz + ty;
console.log(typeof total, total);

// console.log(myName[4]);

// Number / Math methods in js
const isNum = "100.98765";
const checkNum = Number(isNum);

console.log(checkNum, typeof checkNum);

// const newNum =

// const mathNum = Math.round(newNum)
// let mathNum = Math.min(10, 20, 50, 10);
// let mathNum = Math.sqrt(2)
// let mathNum = Math.pow(2, 8)

console.log(mathNum);
