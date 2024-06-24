document.getElementById('h1').innerHTML='String method and Properties'
document.getElementById('h2').innerHTML='Property'
document.getElementById('li1').innerHTML='length'
document.getElementById('h11').innerHTML='Methods (Without Argument)'

document.getElementById('l1').innerHTML='toUpperCase()'
document.getElementById('l2').innerHTML='toLowerCase()'
document.getElementById('l3').innerHTML='trim()'
document.getElementById('l4').innerHTML='trimStart()'
document.getElementById('l5').innerHTML='trimEnd()'

//methods with argument
document.getElementById('h12').innerHTML='Methods (With Argument'

document.getElementById('1').innerHTML='includes()'
document.getElementById('2').innerHTML='indexOf()'
document.getElementById('3').innerHTML='replace()'
document.getElementById('4').innerHTML='replaceAll()'
document.getElementById('5').innerHTML='concat()'
document.getElementById('6').innerHTML='padStart()'
document.getElementById('7').innerHTML='padEnd()'
document.getElementById('8').innerHTML='charAt()'
document.getElementById('9').innerHTML='charCodeAt()'
document.getElementById('10').innerHTML='split()'



//string 
const message= 'Bharat kadam'
// methods without argument
const name=message.toUpperCase()
const name1=message.toLowerCase()
console.log(message)
console.log(name)
console.log(name1)

// methods with argument
let fullName='my full Name is, Bharat Nagnath Kadam.'
let full1=fullName.toUpperCase()
let replace1=fullName.replace('Bharat','Mukinda');
console.log(fullName)
console.log(full1)  
console.log(replace1) 

//imp padStart()
const lastFourDigits='1297'
const Number=lastFourDigits.padStart(12,"X")
console.log(lastFourDigits)
console.log(Number)

//
const lastdigit=`last four digit of my account number is`
const digits1=lastdigit.concat(" ",lastFourDigits)
console.log(digits1)

//
const backBalance=2344
const addedString =`I have $${backBalance} in my account.`
console.log(addedString);