//this keyword in js

//regular and arrow functions here
const hello = {
  name: "shubham",
  hello() {
    console.log(this.name);
  },
  hey: () => {
    //arrrow function this refers to parent function this, here parent is window
    console.log(this.name);
  },
  childObj: {
    username: "shubham1883",
    getDetails() {
      console.log(`username is ${this.username} and name is ${this.name}`);
    },
  },
  subChildObj: {
    address: "palampur", //parent of arrow function here
    getAddress() {
      console.log(`residing city is ${this.address}`);
      const getAddressDetails = () => console.log(this.address); //will refer to parent function here
      getAddressDetails();
    },
  },
};

hello.hello();
hello.hey();
hello.childObj.getDetails();
hello.subChildObj.getAddress();

//classes, constructors and methods

class User {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getName() {
    console.log(this.name);
    console.log(this.address);
  }
}

const user = new User("Shubham", "Palampur");
// user.getName();

//Q1. What is output.
const info = {
  firstName: "shubham",
  getName() {
    //regular function will take value from the function which calling it
    let firstName = "sakshi";
    console.log(this.firstName);
  },
};
// info.getName();

//Q2. What will be result of accessing ref?
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}
const made = makeUser(); //it will look for parent of makeUser();
// console.log(made.ref().name);

//Q3 setTimeOut based question
const log = {
  name: "aryan singh",
  getName() {
    console.log(this.name);
  },
};
// setTimeout(log.getName, 1000);

//Q4. Create an Object calculator
const calculator = {
  read() {
    //take two inputs
    this.a = +prompt("enter first number");
    this.b = +prompt("enter second number");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

//Q5. Implement calculator

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  subtract(b) {
    this.total -= b;
    return this;
  },
  multiply(c) {
    this.total *= c;
    return this;
  },
  divide(b) {
    this.total /= b;
    return this;
  },
};

const result = calc.add(10).multiply(20).subtract(3).add(9);
console.log(calc.total);
