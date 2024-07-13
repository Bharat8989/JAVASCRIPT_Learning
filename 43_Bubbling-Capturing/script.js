// const green = document.querySelector('.green');
// const pink = document.querySelector('.pink');
// const blue = document.querySelector('.blue');

// document.body.addEventListener('click', (e) => {
//     console.log('Body event print');
// });

// green.addEventListener('click', (e) => {
//     console.log('Green event print');
//     e.stopPropagation(); // This prevents the event from bubbling up to the body
// });

// pink.addEventListener('click', (e) => {
//     console.log('Pink event print');
//     e.stopPropagation();
// });

// blue.addEventListener('click', (e) => {
//     console.log('Blue event print');
//     e.stopPropagation();
// });




const green = document.querySelector('.green');
const pink = document.querySelector('.pink');
const blue = document.querySelector('.blue');

document.body.addEventListener('click', (e) => {
    console.log('Body event print');
}, true); // Capture phase

green.addEventListener('click', (e) => {
    console.log('Green event print');
    // e.stopPropagation(); // This prevents the event from bubbling up to the body
}, true); // Capture phase

pink.addEventListener('click', (e) => {
    console.log('Pink event print');
    // e.stopPropagation();
}, true); // Capture phase

blue.addEventListener('click', (e) => {
    console.log('Blue event print');
    // e.stopPropagation();
}, true); // Capture phase
