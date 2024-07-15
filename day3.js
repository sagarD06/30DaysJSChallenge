// Activity 1
//-- Task1 --
const number = 10;

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// -- Task2 --
const age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote yet.");
}

// Activity 2
const a = 2;
const b = 3;
const c = 5;

if (a > b && a > c) {
  console.log("a is the largest number.");
} else if (b > a && b > c) {
  console.log("b is the largest number.");
} else {
  console.log("c is the largest number.");
}

// Activity 3

// -- Task1 --

const day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid day!");
    break;
}

// -- Task2 --

const score = 90;

switch (score) {
  case 100:
  case 90:
  case 80:
    console.log("Grade: A");
    break;
  case 70:
  case 60:
    console.log("Grade: B");
    break;
  case 50:
  case 40:
    console.log("Grade: C");
    break;
  case 35:
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: F");
    break;
}

// Activity 4

const givenNumber = 6;

givenNumber % 2 == 0 ? console.log("Even") : console.log("Odd");

// Activity 5

const year = 2021;

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}
