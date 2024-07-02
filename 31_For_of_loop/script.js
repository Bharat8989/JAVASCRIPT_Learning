const fruits=['banana','apple','peach','mango','grapes']
const fruits1=['banana','apple','peach','mango','grapes']

for(const fruit of fruits){ //for of loop
    console.log(fruit)
}
console.log("foreach functions")
fruits.forEach(function(fruit){
    console.log(fruit);
})


console.log("arrow functions")
fruits1.forEach((fruit1) => {
    console.log(fruit1);
})

