//normal functions 
const normal = function(num){
    return num* num

}


//arrow functions expressions
const square =(num)=>{
    return num*num;
    console.log("arrow functions run")
}

const add=(num1,num2)=> num1+num2;

const random=()=>(
    Math.floor(Math.random()*10)+1);

   const greet= (count)=>{
    for(let i=0;i<count;i++)
        console.log("hellow world")
    }
    greet(4 );