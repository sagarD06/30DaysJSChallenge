// Activity 1
//--Task1--
let num = 5;
function checkOddEven() {
  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

// add();

//--Task2--
let number = 2;
function square() {
  console.log(number * number);
}
// square();

// Activity 2
//--Task3--
let num1 = 2;
let num2 = 3;
function findLargest() {
  console.log(Math.max(num1, num2));
}

// findLargest();

//--Task4--
let str1 = "FirstName";
let str2 = "LastName";

function concatinate() {
  console.log(str1 + str2);
}

// concatinate();

// Activity 3
//--Task5--

const add = () => {
  console.log(num1 + num2);
};

// add();

//--Task6--

let string = "HappySunday";
const findChar = () => {
  console.log(string.includes("H"));
};

// findChar();

// Activity 4
//--Task7--

function product(a, b = 5) {
  console.log(a * b);
}

// product(3,10);

//--Task8--
function greetingMessage(name, age = 18) {
  console.log(`Hello ${name} of ${age}`);
}

// greetingMessage("John");

//Activity 5
//--Task9--

function higherOrderFunc1(func, value = 3) {
  for (let i = 0; i < value; i++) {
    func();
  }
}

// higherOrderFunc1(add);

//--Task10--

function higherOrderFunc2(func1, func2, value = 3) {
    const res1 = func1(value);
    const res2 = func2(res1);
    console.log(res2)
}

function func1(val) {
  return val * 2;
}

function func2(val) {
  return val * 2;
}

higherOrderFunc2(func1,func2);