//array

let rollNo = [101, 102, 103, 104, 105];
const rllNO1=[12,32,4,312,23,453,34];

let concat=rollNo.concat(rllNO1)
console.log(concat)



let numbers = [1, 2, 3, 4, 5];
let allPositive = numbers.every(num => num > 4);

console.log(allPositive); // Output: true

let numbers1 = [1, 2, 3, 4, 5];
let evenNumbers = numbers1.filter((num)=>{
  if( num % 2 === 0)
    return true;
  else return false
});

console.log(evenNumbers); // Output: [2, 4]


let nestedArray = [1, [2, [3, 4], 5]];
let flattenedArray = nestedArray.flat(2);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]


let numbers2 = [1, 2, 3, 4];
let doubled = numbers2.flatMap((num)=>{
  return [ num * 2]
});

console.log(doubled); // Output: [1, 2, 2, 4, 3, 6, 4, 8]


let numbers3 = [1, 2, 3, 4, 5];
numbers3.forEach(num => console.log(num));
numbers3.reverse();
console.log(numbers3)

let numbers4 = [1, 2, 3, 4, 5];
let sum = numbers5.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15


