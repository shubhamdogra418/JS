//function + scope is closure
let shubham = "namaste sakshi";

function greeting() {
  let message = "namaste js"; //lexical scope to hello
  return function hello() {
    console.log(message, shubham); //event propagation
  };
  //local functional scope
}
// greeting()();

let e = 10;
function sum(a) {
  let z = 20;
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + z;
      };
    };
  };
}
// console.log(sum(1)(2)(3)(4));

let count = 0;
(function printCount() {
  if (count == 0) {
    let count = 1; //block scoped and shadowing
    console.log(count); //lexical scope but local
  }
  console.log(count); //can't access block scope - global scope.
});

//write a functin which allows to do this

function craeteBase(num) {
  return function (innerNum) {
    console.log(num + innerNum);
  };
}

let addSix = craeteBase(6);
// addSix(10);
// addSix(21);

//timer closure
function find(index) {
  //Closures in JavaScript let inner functions access variables
  // from their outer scope even after the outer function finishes.
  // In your first code, this keeps the large array a (1M elements) alive in memory,
  // causing repeated computation costs on each closure() call.
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  console.log(a[index]);
}

function find() {
  //The find() function creates a closure by returning an inner function that "closes over" the array a.
  // When you call let closure = find(250);, it builds the 1M-element array once and
  // stores it in the closure's lexical environment. Later calls like closure(376612)
  // access this retained array instantly via console.log(a[index]),
  // but the array never gets garbage collected, consuming ~32MB memory.
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  //improves overhead as fixed closure of 1M elements instead of making new everytim
  return function (index) {
    console.log(a[index]);
  };
}
// let closure = find();
// console.time("closure");
// closure(250);
// console.timeEnd("closure");
// console.time("closure");
// closure(376612);
// console.timeEnd("closure");

//block scope and timeout
function a() {
  function inner(i) {
    for (var i = 0; i < 3; i++) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
  }
  inner();
}
// a();

//prvivate counter
function privateCounter() {
  let _counter = 0;

  function add(increment) {
    _counter += increment;
  }
  function retreive() {
    return `counter value is ${_counter}`;
  }

  return {
    add,
    retreive,
  };
}

// let counter = privateCounter();
// counter.add(10);
// counter.add(20);
// console.log(counter.retreive());

//The Module Pattern is a classic JavaScript design pattern that
// uses IIFE + Closures to create private/public encapsulation—exactly
// like your private counter but as a singleton object.
//private data and functions, can only get the info cant modify it kinda read only

const conunterModule = (function () {
  let _counter = 0;
  //public method
  function add(increment) {
    _counter += increment;
  }

  function _retrieve() {
    return `counter value is ${_counter}`;
  }

  //for consumption PUBLIC API
  return {
    add, //public
    getValue: () => _retrieve(),
  };
})();

conunterModule.add(100);
conunterModule.add(109);
// console.log(conunterModule.getValue());

//make this run only once
let view = "mountains";
function likeVideo() {
  let called = 0;
  return function () {
    if (called === 0) {
      called++;
      console.log(`subscribe to ${view}`);
    } else {
      console.log(`already subscribe to ${view}`);
    }
  };
}

let isSub = likeVideo();
// isSub();
// isSub();
// isSub();
// isSub();

//Memoize polyfill
function memoize(fn) {
  const cache = new Map(); //to store th results
  return function (...args) {
    //multiple args like 20,30,40
    const key = JSON.stringify(args); //["20","30","40"];
    if (cache.has(key)) return cache.get(key); //lookup
    const result = fn.apply(this, args); //execute and keep args in an array
    cache.set(key, result); //cache
    return result; //result
  };
}

const slowFib = (n) => (n < 2 ? n : slowFib(n - 1) + slowFib(n - 2));

const fastFib = memoize(slowFib);

console.time("fast-35");
fastFib(35);
console.timeEnd("fast-35");

console.time("fast-35 again");
fastFib(35);
console.timeEnd("fast-35 again");
