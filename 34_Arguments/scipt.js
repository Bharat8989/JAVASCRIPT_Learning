// function add(){
//     let sum=0;
//     for(let i=0;i<arguments.length;i++){
//         sum=sum+arguments[i]
//     }
//     return sum
// }
// console.log(functions)
 

//Default para

function rollADie(numberOfSides=6){
    return Math.floor(Math.random() * numberOfSides)+1
}