//finding the HTML  element 

//element by id
const myBody=document.body;
myBody.style.backgroundColor='red';
console.log(myBody)

const box2=document.getElementById('box-2');
console.log(box2)
//element by tag name
const divs=document.getElementsByTagName('div');
console.log(divs)
//element by class name
const boxes=document.getElementsByClassName('box');
console.log(boxes)


const boxes1=document.getElementsByClassName('random');
console.log(boxes1)
//element by css selectors
const random=document.querySelector('.container');
console.log(random)


//modifying HTML

//changing HTML  content using innerHTML;

const box1=document.getElementById('box-1');
box1.innerHTML="hello world";
console.log(box1)
box1.style.backgroundColor='pink'



box1.classList.add('round-border')

const boxes2=document.getElementsByClassName('box');
for(let i=0;i<boxes2.length;i++)
    {
        boxes2[i].classList.add('round-border')
    }


//changing HTML attributes value;
//remove class name
// box1.classList.remove('round-border');

//modifying class in HTML

////***************** */
//crating and appending HTML 

const para=document.createElement('p');
para.innerHTML="this in brand new"
const container=document.getElementById('container');
container.appendChild(para);
console.log(para)
console.log(container)

