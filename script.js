// let nums = [2, 3, 4, 4, 5, 65];

// //map filter wil give me new array wont change the elements in the array

// let numbers = nums.map((num, i) => num * 2 + i);

// console.log(nums);
// // console.log(numbers);

// let filterNums = nums.filter((num) => num % 2 !== 0);
// // console.log(filterNums);

// let sum = nums.reduce((curr, acc) => acc + curr, 7);
// // console.log(sum);

// //pollyfills of map filter and reduce
// //map
// // make a new array
// //go through all the elements
// //need to access the elements and indexes as well

// //nums.map((num,i, nums)=> num*2);
// Array.prototype.myMap = function (cb) {
//   //new array
//   let temp = [];
//   //loop through - element, index, array
//   for (let i = 0; i < this.length; i++) {
//     //push each element in the array
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// let mapPolly = nums.myMap((num) => num * 2);
// // console.log(mapPolly);

// // nums.filter((num)=> num%2===0);
// Array.prototype.myFilter = function (cb) {
//   //will return a new array
//   let temp = [];
//   //will go through the array and push the elements in the array which satisfies the condition
//   for (let i = 0; i < this.length; i++) {
//     //ill perform the cb to elements only which satisfies the condition
//     if (cb(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };
// let filterPolly = nums.filter((num) => num % 2 !== 0);
// // console.log(filterPolly);

// //reduce pollyfill
// // nums.reduce((curr, acc, i, nums) => {}, intialValue);

// Array.prototype.myReduce = function (cb) {
//   //accumulator will accumulate the values from the start
//   let accumulator = intialValue;
//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(this[i], i, this) : this[i];
//   }
//   return accumulator;
// };

// let reducePolly = nums.reduce((curr, acc) => acc + curr, 0);
// console.log(reducePolly);

//output based questions
const students = [
  { name: "Aarav Sharma", rollno: 101, marks: 85 },
  { name: "Priya Patel", rollno: 102, marks: 92 },
  { name: "Rahul Kumar", rollno: 103, marks: 78 },
  { name: "Ananya Singh", rollno: 104, marks: 96 },
  { name: "Vikram Joshi", rollno: 105, marks: 81 },
  { name: "Sneha Gupta", rollno: 106, marks: 88 },
  { name: "Arjun Reddy", rollno: 107, marks: 73 },
  { name: "Divya Nair", rollno: 108, marks: 94 },
  { name: "Karan Malhotra", rollno: 109, marks: 79 },
  { name: "Meera Iyer", rollno: 110, marks: 91 },
];

//return name of student in uppercase letters

const names = students.map((student) => student.name.toUpperCase());
// console.log(names);

//names and rollno of students who scored 60+
const passStudents = students.filter(
  (student) => student.marks > 90 && student.rollno > 102,
);
// console.log(passStudents);

//return the sum of marks of alll students
const marksSum = students.reduce((acc, curr) => acc + curr.marks, 0);
// console.log(marksSum);

//return only names of students whose score is more than 90
const brightStudents = students
  .filter((student) => student.marks > 92)
  .map((student) => student.name);
// console.log(brightStudents);

//return total marks of students whose marks greater than 60 after adding 20 marks
//students with marks less than 90 >> add 20 >> return the sum of all marks
const brightMarks = students
  .filter((student) => student.marks < 80)
  .map((student) => student.marks + 20)
  .reduce((curr, acc) => curr + acc, 0);

console.log(brightMarks);
