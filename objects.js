const property = "firstName";
const value = "shubham dogra";

const user = {
  name: "Shubham",
  age: 22,
  email: "shubhamdogra418@gmail.com",
  "hello code": "shubham",
  [property]: value, //dynamic value added
  address: {
    city: "palampur",
  },
};
// delete user.email;
// console.log(user);

//Q1. delete for object

// const hello = (function (a) {
//   delete a; //only for object, wont do anything here
//   return a;
// })(5);

// console.log(hello);

//object play

//loop through the objects
// for (key in user) {
//   console.log(`${key} : ${user[key]}`);
// }

//Q2. make a function mulByTwo() which multiplies all numeric values by 2
let nums = { a: 5, b: 9, title: "my num" };

function mulByTwo(nums) {
  let result = 1;
  for (key in nums) {
    if (typeof nums[key] === "number") {
      result *= nums[key] * 2;
    }
  }
  return result;
}
// console.log(mulByTwo(nums));

//Q3. output
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;
console.log(a[b]); //456

//Q4. diff bw json.stringify and json.parse(), use case

let strObj = JSON.stringify(user); //key also in strings

//use case- can't directly set object in ls Object Object so need stringify there
localStorage.setItem("test", strObj);
console.log(`gettting from local storage ${localStorage.getItem("test")}`);

let strParsed = JSON.parse(strObj); //back to real object
console.log(strParsed.name);

//Q5. output
console.log([..."Lydia"]);

//Q6. output
const admin = { admin: true, ...user };
console.log(admin);

//Q7. output
const halfString = JSON.stringify(user, ["email", "age"]);
// console.log(halfString);

//let and const doesn't attach to window so won't be accessible
var radius = 20;

//Q8. output based on regular and arrow functions
const shape = {
  radius: 12,
  diameter() {
    // this → refers to the object that called the method
    return this.radius * 2; ////refers to local scope
  },
  perimeter: () => {
    //Arrow functions do NOT have their own this.
    // They inherit this from the surrounding lexical scope.
    return 2 + Math.PI * this.radius; //refers to global scope
  },
};
console.log(shape.diameter());
console.log(shape.perimeter());

//"Why shouldn't arrow functions be used as object methods?"
// Because arrow functions don't have their own this. They inherit
// this from the surrounding lexical scope,
// which may not refer to the object.

//Q9. de-structuring in objects
console.log(user.email);
const { name, email } = user; //de-structuring
// console.log(name, email);

//Q10. object refrencing
let cti = { greeting: "hello" };
let ct = cti; //in object we are providing the reference not the copy so it will affect both of them
ct.greeting = "namaste";
// console.log(cti.greeting);

//Q11. Output
//This condition will always return 'false' since JavaScript
// compares objects by reference, not value
//false for "==" and "==="
console.log({ a: 1 } == { a: 1 });

//Q12. Output
let person = { name: "shubham" };
const members = [person]; //just storing in different location and not modifying
person.name = null; //name is null
person = null; //no effect
// console.log(members);

//Q13. Output
const valuee = { number: 10 };
const multiply = (x = { ...valuee }) => {
  console.log((x.number *= 2));
};

multiply();
multiply(valuee);
multiply(valuee);

//Q14. shallow and deep copy of an object ?
//A shallow copy copies only the first level of the object.
// Nested objects are still referenced from the original object.

console.log(user);
const copy = { ...user }; //shallow copy
console.log(copy);
copy.name = "sakshi";
copy.address.city = "delhi"; //address is same but nested property will change
console.log(user);

//A deep copy duplicates everything including nested objects.
// No shared references.
const copied = Object.assign({}, user);
copied.name = "kalia";
copied.address.city = "india";
console.log(copied);

const wave = JSON.parse(JSON.stringify(user));
wave.name = "deepak";
wave.address.city = "hamirpur";
console.log(wave);

//deep clone an object without using JSON methods
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  let clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    clone[key] = deepClone[obj[key]];
  }
  return clone;
}

// const deepCopied = deepClone(user);
// deepCopied.name = "deepak";
// deepCopied.address.city = "hamirpur";
// console.log(deepCopied);

//10. Convert Object to Array
console.log(Object.entries(nums));
const arr = [
  ["a", 1],
  ["b", 2],
];
console.log(Object.fromEntries(arr));
