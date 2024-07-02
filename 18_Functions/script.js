console.log("regular function declaration")
let functions=function greet(name){
  return `hello, ${name}`;
}
console.log(functions("Bharat"))

//function expressions
console.log("function expressions ")

const add = function(a, b) {
  return a + b;
};

console.log(add(2, 3)); // Output: 5

//Arrow functions
console.log('Arrow functions')

const multiply=(a,b)=>a*b;
console.log(multiply(3,5));


//default parameters
console.log("default parameters")


function sayHello(name = "Suraj") {
  return `Hello, ${name}!`;
}

console.log(sayHello()); // Output: Hello, Stranger!
console.log(sayHello("Bharat")); // Output: Hello, Alice!


//higher order functions
console.log("higher order functions")
function repeat(action ,time){
  for (let i=0;i<time;i++)
    {
      action();
    }
}
repeat(()=>console.log("hello"),4)

function fetchData(url) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(`Data from ${url}`);
      }, 1000);
  });
}

fetchData("https://example.com").then(data => console.log(data));
// Output (after 1 second): Data from https://example.com


console.log("function returning another functions")
function createGreeting(greeting) {
  return function(name) {
      return `${greeting}, ${name}!`;
  };
}

const greetHello = createGreeting("Hello");
console.log(greetHello("John")); // Output: Hello, John!

const greetHi = createGreeting("Hi");
console.log(greetHi("Alice")); // Output: Hi, Alice!
