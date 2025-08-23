// Ex1: Use foreach to console log a an area value of a circle
const radius = [1, 2, 3, 4, 5];
radius.forEach((num) => console.log("Area circle: " + Math.PI * num * num));

// Ex2: Use foreach to console log a welcome message to these people
const people = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank"];
people.forEach((message) => console.log(`Welcome ${message}`));

// Ex3: Use foreach to display te price of an item after tax
const products = [
  { name: "Laptop", price: 1000, tax: 0.1 },
  { name: "Phone", price: 500, tax: 0.2 },
  { name: "Tablet", price: 300, tax: 0.15 },
  { name: "Monitor", price: 200, tax: 0.18 },
  { name: "Keyboard", price: 50, tax: 0.12 },
];
products.forEach((aTax) => {
  console.log(`${aTax.name} after tax = ${aTax.price * aTax.tax + aTax.price}$`);
});
