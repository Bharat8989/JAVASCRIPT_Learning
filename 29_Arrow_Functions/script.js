//normal functions 
const normal = function(num){
    return num* num

}


//arrow functions expressions
const squate=(num)=>{
    return num*num;
    console.log("arrow functions run")
}

const add=(num1,num2)=> num1+num2;

const random=()=>(
    Math.floor(Math.random()*10)+1);