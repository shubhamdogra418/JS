// Currying transforms a function with multiple arguments into a chain of
// single-argument functions.
//Currying = converting a function with multiple arguments into
// nested functions with one argument each.

///Q1. sum(2)(6)(1)

function combinedSum(a, b, c) {
  return a + b + c;
}
// console.log(combinedSum(2, 6, 1));

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// console.log(sum(10)(20)(30));
// const add10 = sum(10);

//advantages- fixed 10
// console.log(add10(9)(3));

//Q2. evaluate("sum")(3)(9); //12
// evaluate("subtract")(3)(9); //6
// evaluate("multiply")(3)(9); //27
// evaluate("divide")(3)(9); //3

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "subtract") return Math.abs(a - b);
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return Math.ceil(a / b);
      else return "invalid operation";
    };
  };
}
// console.log(evaluate("sum")(3)(9));
// console.log(evaluate("subtract")(3)(9));
// console.log(evaluate("multiply")(3)(9));
// console.log(evaluate("divide")(3)(9));

//you can make a function fixed with one value
// const alwaysSum = evaluate("sum");
// console.log(alwaysSum(9)(4));

//Q3. Infinite currying
//add(1)(2)(3)(4)() //10 keep on currying until you call with empty parentheses

function add(a) {
  return function (b) {
    if (b === undefined) return add(a + b);
    return a;
  };
}

// console.log(add(1)(2)(3)(4)());

//Q4. Currying vs Partial Application
//Currying = strict 1-arg chain. Partial = fix N args → call w/ rest.

function sum(a) {
  //curryign restricts to one argument only
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
const add10 = sum(10);
console.log(add10(2)(39));

function sumPartial(a) {
  //partial application to have number of together args as well
  return function (b, c) {
    return a + b + c;
  };
}

const x = sumPartial(40);
console.log(x(9, 12));
//or
const add20 = sumPartial(20);
console.log(add20(20, 30));

//Q5. currying to manipulate the DOM
function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const hello = updateElementText("heading");
const hello1 = updateElementText("heading1");

// hello("shubham and travelling");
// hello1("react");

//curry() function to transform a regular function into a curried version

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}

function multiply(a, b, c) {
  //function and argument length
  return a * b * c;
}

let curriedMultiply = curry(multiply); //fn input
console.log(curriedMultiply(2)(9)(7)); //functions
