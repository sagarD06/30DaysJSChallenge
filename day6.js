// Activity 1

//--task1--
const arr = [1, 2, 3, 4, 5];
// console.log(arr);

//--task2--
console.log(arr[0]);
console.log(arr[4]);

// Activity 2

//--task3--

arr.push(6);
console.log(arr);

//--task4--
arr.pop();
console.log(arr);

//--task5--
arr.shift();
console.log(arr);

//--task6--
arr.unshift(1);
console.log(arr);

// Activity 3

//--task7--
const arrMap = arr.map((item) => {
  return item * 2;
});

console.log(arrMap);

//--task8--
const arrFilter = arr.filter((item) => item % 2 === 0);
console.log(arrFilter);

//--task9--
const arrReduce = arr.reduce((a, b) => a + b);
console.log(arrReduce);

// Activity 4

// --task10--

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//--task11--

arr.forEach((item) => {
  console.log(item);
});

// Activity 5

//--task12--
const twoDarr = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(twoDarr);

//--task13--

console.log(twoDarr[0][1]);
