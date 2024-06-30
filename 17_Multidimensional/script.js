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



const objects3 = {
    firstName: 'Bharat',
    lastName: 'Kadam',
    age: 21,
    fatherName: 'Nagnath',
    address: {
        city: 'Pune',
        state: 'Maharashtra'
    }
};
console.log(objects3);

// Deep copy using JSON.parse() and JSON.stringify()
let objects4 = JSON.parse(JSON.stringify(objects3));
console.log(objects4);

objects4.firstName = 'Suraj';
objects4.address.city = 'Mumbai';
console.log(objects4);
console.log(objects3);



