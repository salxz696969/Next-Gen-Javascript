// Ex1: Use spread operator to copy an array and object of a given array and object
/// and console log it
const arrays = [1, 2, 3];
const objects = { name: "John", age: 30 };
//newArrays
const newArrays = [...arrays];
console.log(newArrays);
//newObjects
const newObj = {...objects};
console.log(newObj);

// Ex2: Use spread operator to merge two arrays and objects
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const object1 = { name: "John" };
const object2 = { age: 30 };
//merge array
const mergeArrays = [...array1,...array2];
const mergeObj = {...object1,...object2};
console.log(mergeArrays);
console.log(mergeObj);

// Ex3: Use spread operator to add an element to the start of the array
// add an element to the end of an array
// add an element to the start and an element to the end of an array
const baseArray = [1, 2, 3];
const addStart = [0,...baseArray];
const addEnd = [...baseArray, 4];
const addBoth = [0,...baseArray,4];
console.log(addStart);
console.log(addEnd);
console.log(addBoth);


// Ex4: Use spread operator to add a key to the start of an object
// add a key to the end of an object
// add a key to the start and a key to the end of an object
const baseObject = { name: "John" };
const addkeyStart = { id: 100, ...baseObject};
const addkeyEnd = {...baseObject,grade: 12}
console.log(addkeyStart);
console.log(addkeyEnd);


// Ex5: Use spread operator to merge two arrays
// and add an element to the start and also one at the end
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];
const merge = [...arrayA,...arrayB];
console.log(merge);
const add = [0,merge,7];
console.log(add);


// Ex6: Use spread operator to merge two objects
// and add a key to the start and also one at the end
const obj1 = {name: "vit"};
const obj2 = {major: "CS"};
const obj = {...obj1, ...obj2};
const nobj = {id: 10, obj, grade: 10};
console.log(nobj);