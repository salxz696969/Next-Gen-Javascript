// EXERCISE 15: Create multiple student objects and store them in an array called students. Use a combination of for...of and for...in to print each student's details

// Your code here:
let students = [
    { name: "DitWay", age: 20, major: "CS" },
    { name: "Vannda", age: 22, major: "TN" },
    { name: "Eno", age: 19, major: "DB" }
];

for (let s of students) {
    for (let key in s) {
        console.log(key + ": " + s[key]);
    }
    console.log(" ");
}