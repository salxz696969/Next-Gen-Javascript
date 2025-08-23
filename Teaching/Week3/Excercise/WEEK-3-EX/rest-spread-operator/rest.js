// Ex1: Make a function using rest operator to get all the arguments passed in 
// and console log it
function restOp(...argu) {
    console.log(argu);
}
restOp("hi",1,2,4);

// Ex2: Make a function to get the first and second arguments 
// and use rest operator to get the rest 
// and console log first, second, and the rest
function getFnS(first,second,...argue) {
    console.log(first,second,argue);
}
getFnS(10,33,23,23,33,4);


// Ex3: Use rest operator to get the first 3 elements and the rest
// and console log it
const arrays=[1,2,3,4,5]
let [first,second,third, ...rests] = arrays;
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(rests);
// Ex3: Use rest operator to get the name, age, married, music, and the rest
// and console log it
const objects = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    occupation: "Engineer",
    hobby: "Photography",
    favoriteColor: "Blue",
    pet: "Dog",
    married: false,
    language: "English",
    sport: "Football",
    music: "Kpop"
};
let { name,age,married,music, ...rest } = objects;
    console.log(name);
    console.log(age);
    console.log(married);
    console.log(music);
    console.log(rest);

