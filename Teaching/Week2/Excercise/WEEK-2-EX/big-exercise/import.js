// Exercise:
// 1. Import displayStudentInfoSimulation from 'export.js'.
// 2. Create a student object with properties 'name', 'age', 'gender', and 'grade'.
// 3. Use destructuring to extract the properties from the data returned by the function.
// 4. Use template literals to print the student's information to the console.

import { displayStudentInfoSimulation } from "./export.js";

let obj = {
    name: "B Sokha",
    age: 25,
    gender: "Male",
    grade: 12
};
const {name,age,gender,grade} = displayStudentInfoSimulation();
console.log(`
    Name: ${name}
    Age: ${age}
    Gender: ${gender}
    Grade: ${grade}`);

