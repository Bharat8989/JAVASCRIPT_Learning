// Define the sayHi function
function sayHi() {
    console.log("say hi");
}

// Define the card function (though it is not used)
function card() {
    // console.log("onclick")
}

// Select the List element
const List = document.querySelector('.List');

// Define the sayhi function
function sayhi() {
    console.log("hiiiiii");
}

// Add multiple click event listeners to the List element
List.addEventListener('click', sayhi);
List.addEventListener('click', function() {
    console.log("second hi");
});
List.addEventListener('click', () => {
    console.log("three click");
});

let count=1;


// Select the container element
const container = document.querySelector('.container');

// Select the card element
const cardElement = document.querySelector('.card');

// Add click event listener to the card element
cardElement.addEventListener('click', () => {
    // Create a new card element
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerText=count;
    count++
    // Append the new card to the container
    container.append(newCard);
});


const h1 = document.querySelector('h1');
const card = document.querySelector('.card');
const container = document.querySelector('.container');

let count =1;

card.addEventListener('click', (e) => {
    console.log(e);
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerHTML = count++;
    container.append(newCard);
});
