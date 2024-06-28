const nameAndNumbers=[['Bharat',45],['sachin',34]]
console.log(nameAndNumbers)
const king=nameAndNumbers[1]
console.log(king)


const tictacToe=[
    ['x',null,null],
    [null,null ,'O'],
    ['O',null,'x']
]
console.log(tictacToe)

const objects = {
    firstName: 'Bharat',
    lastName: 'Kadam',
    age: 21,
    fatherName: 'Nagnath'
};
console.log(objects);

//shallow copy using objects
let objects1 = Object.assign({}, objects);
//shallow copy using spread operator
let objects2={...objects};

console.log(objects2)
console.log(objects1);

objects1.firstName = 'Suraj';
objects2.lastName='shinde'
console.log(objects1);
console.log(objects);  
