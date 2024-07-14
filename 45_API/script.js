
const image = document.querySelector('#dogImage');

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        console.log('got the data');
        console.log(json.message);
        image.src = json.message;
    })
    .catch(error => {
        console.error('Error fetching the dog image:', error);
    });