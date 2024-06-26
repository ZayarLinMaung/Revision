//var declaration
let a = 50;
let b = 10;
console.log("a+b", a + b);
//for loop
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  arr[i] += 20;
}
console.log(arr);
//foreach
arr = [10, 20, 30, 40, 50];
arr.forEach(function (number, index) {
  console.log("Element at index ", index, " is ", number);
});
//map
let arr2 = [100, 200, 300, 400, 500];
squared = arr2.map(function (number, index) {
  return number * number;
});
console.log(squared);
//filter
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
even = arr3.filter(function (number, index) {
  return arr3[index] % 2 === 0;
});
console.log(even);
//function
function testFunc() {
  console.log("Hello World");
}
testFunc();
//function with parameters
function func(x, y) {
  return x + y;
}
let z = func(3, 5);
console.log(z);
//function expression
const sum = function adding(x, y) {
  return x + y;
};
z = sum(4, 1);
console.log(z);
//anonymous function
const adding = function (x, y) {
  return x + y;
};
z = adding(4, 1);
console.log(z);
//arrow function
const add = (a, b) => a + b;
let c = add(5, 6);
console.log(c);
//DOM
const event1 = document.querySelector(".btn");
const text = document.createElement("h1");
text.textContent = "Hello World";
event1.addEventListener("click", function () {
  document.body.appendChild(text);
});
const container = document.getElementById("container");
// container.innerHTML = "<h1>Lee Lr</h1>";
