const h1=document.querySelector('h1')
h1.addEventListener('keypress',(e)=>{
    console.log(e)
})

const input=document.querySelector('input')
//press keyboard
window.addEventListener('keypress',(e)=>{
    console.log('Key Code ',e.code)
    console.log('value',e.key)
})


// input.addEventListener('keypress',(e)=>{
//     console.log(e.key)
// })


//key up


window.addEventListener('keyup',(e)=>{
    console.log('Key Code ',e.code)
    console.log('value',e.key)
})

//key down



window.addEventListener('keydown',(e)=>{
    console.log('Key Code ',e.code)
    console.log('value',e.key)
})