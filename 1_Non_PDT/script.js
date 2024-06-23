console.log("hello world");

// Modify the element with the ID "h1"
document.getElementById('h1').innerHTML = 'Non-Primitive Data Types';

// Modify the element with the ID "h2"
document.getElementById('h2').innerHTML = 'Object';

let person = {
    name: 'Bharat',
    age: 21,
    isMarried: false,
};

// Log the person object and its properties
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isMarried);

// array example
const countries=['india','japan','tokyo'];
console.log(countries)
//an array of interger
const numbers=[1,2,4,4,32,3];
console.log(numbers)
