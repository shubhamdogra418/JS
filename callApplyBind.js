const obj = { name: "shubham" };
const sub = { name: "sakshi" };

//which object to refer and which value to use
function hello(village, city) {
  return ` hello ${this.name} from ${village} in ${city}`;
}
//call() immediately invokes the function and sets this.
console.log(hello.call(obj, "maniyara", "palampur"));
//apply() works like call() but arguments are passed as an array.
console.log(hello.apply(obj, ["maniyara", "palampur"]));
//bind() does NOT execute immediately.
// It returns a new function with this bound.
const bindOne = hello.call(obj, "maniyara", "palampur");
const bindTwo = hello.apply(obj, ["pahra", "kangra"]);
console.log(bindOne, bindTwo);

//Q1 - output
const age = 10;
var person = {
  age: 20,
  getAge: function () {
    return this.age;
  },
};

// var person2 = { age: 24 };
// console.log(person.getAge.call(person2));

//Q2. Method Borrowing
///apply example

const user = {
  name: "shubham",
};
const info = { name: "sakshi" };
function intro(age, city) {
  //which name you;re referring to -  user or intro
  console.log(`${this.name}, ${age}, ${city}`);
}
// intro.apply(user, [20, "palampur"]);

//Q3. bind function
const person1 = { name: "shubham" };
const person2 = { name: "sakshi" };

function greet() {
  console.log(this.name); //which person's name
}
//bind Cannot Be Overridden
const bound = greet.bind(person2); //fixed here only
// bound.call(person1);

//this Lost When Method Extracted
const subs = {
  name: "shubham dogra nath",
  greet() {
    return `${this.name}`;
  },
};

const subsInfo = subs.greet;
subsInfo(); //undefined because this is lost here

//Q4. tricky one
function greet() {
  console.log(this.name);
}
const person3 = {
  name: "shubham dogra",
  greet: greet.bind(this),
};
// person3.greet();

//Q5.
function sayHi() {
  //   console.log(this.name);
}

const user1 = {
  name: "Shubham",
};

setTimeout(sayHi, 1000);

//Q6. append an element to another array
const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];

//what apply does- fn.apply(thisArg, [args])
array1.push.apply(array1, array2);
// console.log(array1);

const nums = [15, 6, 4, 18, 9, 2];
//find min and max in an array- using apply
// console.log(Math.max.apply(null, nums));
// console.log(Math.min.apply(null, nums));

//Q7. bind chaining
function f() {
  return `${this.name}`;
}
//bind can't be overriden
f = f.bind({ name: "sherlock" }).bind({ name: "holmes" });
// console.log(f());/

//Q8. fix the code
function checkPassword(success, failed) {
  let password = prompt("Password?", "");
  if (password === "shubham") success();
  else failed();
}

const userInfo = {
  name: "shubham dogra",
  loginSuccessful() {
    console.log(`${this.name} logged in`);
  },
  loginFailed() {
    console.log(`${this.name} login failed`);
  },
};
//call and apply will immediately call the function which we don't need
//use bind instead
// checkPassword(
//   userInfo.loginSuccessful.bind(userInfo),
//   userInfo.loginFailed.bind(user),
// );

//Q9. pollyfill for call
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    return "now a function";
  }
  context.fn = this; //attaching function to object
  context.fn(...args); //passign arguments also
};
// console.log(intro.call(user, "27", "dharamshala"));

//Q10. pollyfill for apply
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    return "not a function";
  }
  context.fn = this;
  context.fn(...args);
};
// console.log(intro.apply(user, [29, "dalhousie"]));

//Q11. pollyfill for bind
const performBind = intro.bind(user, "90", "allahabad");
// console.log(performBind());

Function.prototype.myBind = function (context = {}, args) {
  if (typeof this !== "function") {
    return "not a function";
  }
  //attach function to the object
  context.fn = this;
  //when immediately returning then
  //   context.fn(...args); // but we have to return a function from here
  //return a function here
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const myOwnBind = intro.bind(user);
console.log(myOwnBind("99", "lucknow"));
