document.getElementById('h1').innerHTML="Decision Making in JavaScript"

const username=prompt('Please enter your Name')
const userAge=prompt("Please enter your Age")

console.log(`Name: ${username}`)
console.log(`Age: ${userAge}`)

if(userAge => 18 && userAge <=24)
    {
        console.log("user is a college Student.")
        console.log("and he is learning computer science")
    }

if(userAge >= 25 && userAge <= 45)  
    {
        console.log("user is a working professional")
        console.log("and he is web developer")
    } 