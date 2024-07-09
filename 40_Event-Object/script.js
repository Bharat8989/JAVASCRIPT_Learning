const userName=document.querySelector('#username')
//hi
const para=document.querySelector('p')

const form=document.querySelector('form')


userName.addEventListener('click',()=>{
    console.log('input')
})

userName.addEventListener('dblclick',()=>{
    console.log("double click")
})
let inputValue;

userName.addEventListener('input',(event)=>{
    console.log(event.target.value)
    inputValue=event.target.value
    console.log("input event print")
    para.innerText=event.target.value
})


userName.addEventListener('change',(event)=>{
    console.log(event.target.value)
    inputValue=event.target.value
    console.log("input event print")
    para.innerText=event.target.value
})

userName.addEventListener('change',(event)=>{
    console.log(event)
    inputValue=event.target.value
    console.log("input event print")
    para.innerText=event.target.value
})

userName.addEventListener('focus',(event)=>{
    console.log(event)
    console.log(event.target.value)
    inputValue=event.target.value 
    console.log("input event print")
    para.innerText=event.target.value
})
userName.addEventListener('blur',(event)=>{
    console.log(event)
    inputValue=event.target.value
    console.log("input event print")
    para.innerText=event.target.value
})

form.addEventListener('click',(e)=>{
    console.log(e.target)
    console.log("your form is submit")
})

//submit event 
