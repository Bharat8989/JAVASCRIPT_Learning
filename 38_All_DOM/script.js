const parent= document.querySelector('.parent')
console.log(parent)
console.log(parent.children);
console.log(parent.children[1].innerHTML);

for(let i=0;i<parent.children.length;i++){
    console.log(parent.children[i].innerHTML);
}
parent.children[1].style.color='orange'


const dayOne=document.querySelector('.day')
console.log(dayOne);
console.log(dayOne.parentElement)
console.log(dayOne.nextElementSibling);

document.querySelector('h1').setAttribute('title','hello world!')