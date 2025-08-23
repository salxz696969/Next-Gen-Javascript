// Exercise 1: Write a function with a parameter that returns the square of the number and make another one using arrow function.

let a = 4;
//non arrow
function square(a) {
    return a*a;
}
console.log(square(a));
//arrow
const squares = (a) => a*a;  
console.log(squares(a));

// Exercise 2: Write a function with a parameter that prints double the number to the console (no return) and make another one using arrow function.

//non arrow
let k = 3;
function double(k) {
    console.log(k*2);
}
double(k);
//arrow
const doubles = (k) => k*2;
console.log(doubles(k));

// Exercise 3: Write a function with no parameter that returns the value of Pi and make another one using arrow function.

//non arrow
function pii() {
    let p = Math.PI;
    return p;
}
console.log(pii());
//arrow
const pi = (pai) => Math.PI;
console.log(pi());

// Exercise 4: Write a function with no parameter and no return that prints "Hello!" to the console and make another one using arrow function.

//non arrow
function print() {
    console.log("Hello!");
}
print();
//arrow
const prints = (q) => console.log("Hello!");
prints();
