
const image = document.querySelector('#dogImage');

// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(json => {
//         console.log('got the data');
//         console.log(json.message);
//         image.src = json.message;
//     })
//     .catch(error => {
//         console.error('Error fetching the dog image:', error);
//     });

const button=document.querySelector('button')
button.addEventListener('click',()=>{
    const xhr=new XMLHttpRequest()

    console.log(xhr)
    xhr.addEventListener('load',()=>{
        // console.log(JSON.parse(xhr.response));
    })
    xhr.open('GET','https://www.quilex.tech/internship')
    xhr.send()
})
function sayhi(){
    console.log("hi")
}
sayhi();
