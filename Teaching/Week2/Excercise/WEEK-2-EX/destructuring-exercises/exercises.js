// Exercise 1: Make an object called 'person' with properties 'name', 'age', and 'city'.
// And use destructuring to extract these properties into variables and print them to the console.
let obj = {
    name: "Sok",
    age: 12,
    city: "PhnomPenh"
};
const {name,age,city} = obj;
console.log(`name: ${name} age: ${age} city: ${city}`);
// Exercise 2. Make an array called 'fruits' with at least 3 elements.
const fruits = ['Apple','Banana','Papaya'];
const [first,second] = fruits;
console.log(first + " " + second);
// Use destructuring to extract the first two elements into variables and print them to the console.
