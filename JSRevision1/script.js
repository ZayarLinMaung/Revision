console.log("Hello World");
// clg => command
// var declaration
// let a =(assignment op) 1(value);(end op)
let a = 10;
let b = 15;
console.log("a+b=", a + b);
//5 types=>String,Number,Boolean,Array,Objects
console.log("10" + "20"); //concatenation

console.log(a > 10);
let arr1 = [10, 20, 30, "a", "b", "c", true, false, [1, 2, 3]];
console.log(arr1);
console.log(arr1[4]);
let obj1 = {
  name: "ZLM",
  age: 22,
};
console.log(obj1);
console.log(obj1.age);
//Conditional Statement
// if/else if/ else
//switch
let c = 20;
if (c > 20) {
  console.log("c is greater than 10");
} else if (c === 20) {
  console.log("c is equal to 20");
} else {
  console.log("c is less than 20");
}
switch (c) {
  case 10: {
    console.log("c is equal to 10");
    break;
  }
  case 20: {
    console.log("c is equal to 20");
    break;
  }
  case 30: {
    console.log("c is equal to 30");
    break;
  }
  default: {
    console.log("c is equal to 0");
    break;
  }
}
//Looping
//While
c = 20;
while (c < 30) {
  console.log(c);
  c++;
}
//for
for (let i = 0; i < 10; i++) {
  console.log(i);
}
let arr2 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr2.length; i = i + 1) {
  console.log(arr2[i]);
}
//for each
arr2.forEach(function (number, index) {
  console.log("Element at index ", index, " is ", number);
});
//map => best for data manipulation
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

//functions
function test() {
  console.log("Hello World");
}
test();
//functions with parameters/arguments
function add(x, y) {
  return x + y;
}
let d = add(a, b);
console.log(d);
//function expression
let funSum = function sum(x, y) {
  return x + y;
};
console.log(funSum(10, 30));
//anonymous function
let addition = function (x, y) {
  return x + y;
};
console.log(addition(10, 30));
//arrow function
let arrFun = (x, y) => x + y;
arrFun(10, 10);

const text = document.querySelector("h1");
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  text.style.color = "blue";
});
