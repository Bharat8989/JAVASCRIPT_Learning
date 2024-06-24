document.getElementsByClassName('h1')[0].innerHTML = 'Mathematical Operators';
document.getElementsByClassName('li1')[0].innerHTML = 'Addition Operator: +';
document.getElementsByClassName('li2')[0].innerHTML = 'Subtraction Operator: -';
document.getElementsByClassName('li3')[0].innerHTML = 'Multiplication Operator: *';
document.getElementsByClassName('li4')[0].innerHTML = 'Remainder Operator: %';
document.getElementsByClassName('li5')[0].innerHTML = 'Division Operator: /';
document.getElementsByClassName('li6')[0].innerHTML = 'Exponentiation Operator: **';


let math=Math.floor(-2.3)
console.log(math)
let add=34+32
console.log(add)
let sub=34-3
console.log(sub)
let mul=34*2
console.log(mul)
let rem=23%3
console.log(rem)
let expo=2**3
console.log(expo)

const width= prompt('enter your width:')
const height=prompt('enter your height:')
let mult=width*height;
console.log("area of triangle:" +mult);
document.write(`Rectangle Area: ${width*height}`)
