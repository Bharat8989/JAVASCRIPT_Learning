document.getElementById('h1').innerHTML = 'Arrays';

const studentName=['Bharat', 'Suraj', 'Pavan', 'Mukinda', 'Datta', 'Atamaram','Kartik']
console.log(studentName)
document.write("Student List : <br>" +studentName + "<br>")
studentName.push('manmit');
document.getElementById('demo').innerHTML=studentName;

const person={
    firstName:'john',lastName:'doe',age:23
};
let king=studentName.length;
console.log(king)
document.write(king);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];

//new array

const points=new Array(23,43,543,23,12,34,45);
const point=[23,43,23,45,67,87,55];
console.log(points);
console.log(point);