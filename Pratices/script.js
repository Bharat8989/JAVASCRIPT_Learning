 const click=document.getElementById('first')
 click.addEventListener('click', (e)=>{
    console.log(e)
    console.log(e.target)
    console.log(" first click ")
 })
//  click();

const second=document.getElementById('second')
second.addEventListener('dblclick',()=>{
    console.log("dblclick on")
})

const three=document.getElementById('three')
three.addEventListener('focus',(e)=>{
    console.log('focus on')
})
const four=document.getElementById('fourth')
four.addEventListener('bluer',()=>{
    console.log('bluer event ')
})