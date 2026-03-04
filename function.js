//function declerations aka function variables
//anonymous functions - can be added as callback functions as well

// first class functions - where fxns csn be treated as variables
// and functions can do all a variable can do

//arrow functions
//iife- immediately invoked function expressions

function hello() {
  console.log("function declerations");
}

// hello();

const hey = function () {
  console.log("function variables");
};

// hey();

//callback function
function square(num) {
  return num * num;
}

console.log(square(5));

//first class functions
function displaySquare(callback) {
  console.log("square is", square(5));
}
// displaySquare(square);

//iife
(function cube(num) {
  console.log(num * num * num);
})(2);

//output based questions - lexical scope and closure
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

// function scope and timers
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

//function hoisting
// hello();

function hello() {
  console.log(a);
  const a = 10;
  console.log("roadside revision");
}

var x = 21;
var fun = function () {
  console.log(x);
  var x = 20;
  console.log("function variable");
};
// fun();

//spread vs rest operator
//spread operator - expands the array into individual elements
//rest operator - collects the individual elements into an array

function sum(...nums) {
  //rest operator
  console.log(nums[0] + nums[1] + nums[2]);
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// sum(...nums); //spread operator
const fnhello = (a, x, y, ...nums) => {
  console.log(x, y, nums[1]);
};
// fnhello(1, 2, 3, 4, 5);

//callback function

function greeting(name) {
  return name;
}

function meeting(callback) {
  console.log(`hello ${greeting("shubham")}`);
}

// meeting(greeting());
let username = "sakshi kalia";

//arrow functions this
const user = {
  username: "shubham dogra",
  rec1() {
    console.log("hello", this.username); //this pointing to local scope
  },
  rec2: () => {
    console.log("hello", this.username); ////this pointing to global scope
  },
};
user.username;
user.rec1();
user.rec2();
