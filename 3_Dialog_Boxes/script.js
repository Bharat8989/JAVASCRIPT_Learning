document.getElementsByClassName('h1')[0].innerHTML = "Dialog Boxes"
document.getElementsByClassName('h3')[0].innerHTML = "There are three types of Dialog Boxes.";
document.getElementsByClassName('ol1')[0].innerHTML = "alert: Your message goes here";
document.getElementsByClassName('ol2')[0].innerHTML = "confirm: Your message goes here";
document.getElementsByClassName('ol3')[0].innerHTML = "prompt: Your message goes here";

// let isprompt=prompt('hi my name is Bharat')
// console.log(isprompt)
let name=prompt('Enter your name?','Default Name')
console.log(name)
document.getElementById('king').innerHTML=name
function warning(){
    alert('Warning: Danger! You have not filled everything.');
    console.log("Warning: Danger! You have not filled everything.");
}

