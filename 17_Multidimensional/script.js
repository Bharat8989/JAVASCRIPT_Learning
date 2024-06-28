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

///Shallow copy
let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
 
console.log("Employee=> ", employee);
let newEmployee = employee;    // Shallow copy
console.log("New Employee=> ", newEmployee);
 
console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);


let adam={
    name:'adam',
    lastname:'jason'
}
console.log(adam)

let karan=adam;
karan.name='karan';
console.log(adam);
console.log(karan);
//deep copy

const user = {
    name: "Kingsley",
    age: 28,
    job: "Web Developer"
}
console.log(user)
let clone = JSON.parse(JSON.stringify(user))
clone.age=23;
console.log(user)
console.log(clone)