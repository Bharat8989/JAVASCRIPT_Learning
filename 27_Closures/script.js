function outer(){
function parent(){
    function add() {
        const a=3;
        const b=4;
        console.log(a+b);
    }
    return add 
} 
  return parent()
}
// console.dir(add);
// const add1=parent()
// console.dir(add1)
const add1 =outer()
console.dir(add1);