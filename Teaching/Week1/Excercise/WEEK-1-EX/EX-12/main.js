// EXERCISE 12: Write a for...in loop to iterate over the student object you created above

// Your code here:
let student = {
    name: "Vannda",
    age: 11,
    major: "CS",
};
for(let key in student) {
    console.log(key);
    console.log(student[key]);
}