const months = ['January', 'February', 'March', 'April', 'May', 'December'];

// Using map method
console.log(months.map((month, index) => {
    console.log(index + 1, month);
    return month.toUpperCase();
}));

// Using filter method
console.log("Filtered method");
console.log(months.filter((month, index) => {
    console.log(index + 1, month);
    return month.toUpperCase().includes('M');
}));


// Create array
console.log("*********************************");
const students = [
    { name: 'Bharat', age: 21 },
    { name: 'Suraj', age: 32 },
    { name: 'Pavan', age: 15 },
    { name: 'Amir', age: 13 }
];

const adultStudents = students.filter((student) => {
    console.log(student.name.toUpperCase());
    return student.age >= 18;
}).map((student) => student.name).filter((name) => name.toUpperCase().includes('A'));

console.log(adultStudents);


//reduce example
console.log('##################################');
console.log('Reduce');

const nums = [1, 1, 2, 1, 1, 1];
const sum = nums.reduce((accumulator, current, index) => {
    console.log(accumulator);
    return accumulator + current;
}, 0);

console.log(sum);


//4
console.log('Filters in JavaScript arrays');

const studentList = [
    { id: 1, name: 'Alice Johnson', age: 20, sport: 'Basketball' },
    { id: 2, name: 'Bob Smith', age: 21, sport: 'Soccer' },
    { id: 3, name: 'Charlie Brown', age: 22, sport: 'Tennis' },
    { id: 4, name: 'David Williams', age: 20, sport: 'Swimming' },
    { id: 5, name: 'Eva Davis', age: 21, sport: 'Volleyball' },
    { id: 6, name: 'Frank Miller', age: 23, sport: 'Baseball' },
    { id: 7, name: 'Grace Wilson', age: 22, sport: 'Track and Field' },
    { id: 8, name: 'Hannah Lee', age: 20, sport: 'Gymnastics' },
    { id: 9, name: 'Isaac Moore', age: 21, sport: 'Wrestling' },
    { id: 10, name: 'Julia Taylor', age: 23, sport: 'Golf' }
];

const filteredStudents = studentList.filter((student) => student.id % 2 === 0);
console.log(filteredStudents);

console.log('Map arrays');
// Using map method
const names = studentList.map((student) => `<li>${student.name}</li>`);
console.log(names);

// Update DOM
const div = document.getElementById('demo');
if (div) {
    div.innerHTML = `<ul>${names.join('')}</ul>`;
}
