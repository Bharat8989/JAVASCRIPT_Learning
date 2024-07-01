const students = [
  {
    id: 1,
    name: 'Alice Johnson',
    age: 20,
    sport: 'Basketball'
  },
  {
    id: 2,
    name: 'Bob Smith',
    age: 21,
    sport: 'Soccer'
  },
  {
    id: 3,
    name: 'Charlie Brown',
    age: 22,
    sport: 'Tennis'
  },
  {
    id: 4,
    name: 'David Williams',
    age: 20,
    sport: 'Swimming'
  },
  {
    id: 5,
    name: 'Eva Davis',
    age: 21,
    sport: 'Volleyball'
  },
  {
    id: 6,
    name: 'Frank Miller',
    age: 23,
    sport: 'Baseball'
  },
  {
    id: 7,
    name: 'Grace Wilson',
    age: 22,
    sport: 'Track and Field'
  },
  {
    id: 8,
    name: 'Hannah Lee',
    age: 20,
    sport: 'Gymnastics'
  },
  {
    id: 9,
    name: 'Isaac Moore',
    age: 21,
    sport: 'Wrestling'
  },
  {
    id: 10,
    name: 'Julia Taylor',
    age: 23,
    sport: 'Golf'
  }
];


const entries=students.map((id,Name)=>{
  //  console.log(Name+,id)
  return id.id;
})

console.log(entries)

const studentName=students.map((Name)=>{
  return Name.name;
})
console.log(studentName)



const fruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200]
]);

const fruitValues = fruits.values();

for (const value of fruitValues) {
  console.log(value); // Output: 500, 300, 200
}
