// Exercise: Import
// 1. Import 'addNumbers', 'subtractNumbers', 'multiplyNumbers', and 'divideNumbers' from 'export.js'.
// 2. Print the results of each function with example parameters to the console.
let a = 10;
let b = 3;
import { addNumbers } from "./export.js";
import { subtractNumbers } from "./export.js";
import { multiplyNumbers } from "./export.js";
import { divideNumbers } from "./export.js";

console.log(addNumbers(a,b));
console.log(subtractNumbers(a,b));
console.log(multiplyNumbers(a,b));
console.log(divideNumbers(a,b));