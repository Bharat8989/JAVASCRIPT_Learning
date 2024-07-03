const calculate=(a,b,operations)=>{
    return operations(a,b)
}

//method 1
const addition=calculate(4,5,function(num1,num2){
    return num1+num2;
})
console.log(addition)

//method2
const subtraction=(a,b)=>a-b;
const subResult=calculate(23,2,subtraction)
console.log(subResult)

//method3
function multiply(a,b){
    return a*b;
}
const mulResult=calculate(3,4,multiply);
console.log(mulResult)