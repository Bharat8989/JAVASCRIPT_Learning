const fruits=['banana','apple','peach','mango','grapes']

for (let i =0;i<fruits.length;i++)
    {
        console.log(fruits[i]);
        const sort1=fruits.sort();
        console.log(sort1)
    }


    console.log("***********")

   for (const fruit of fruits){
    console.log(fruit)
   }
  
   const user='Bharat Kadam'
for (const letter of user){
    console.log(letter)
}

const object={
    firstName:'Bharat',
    lastName:'kadam',
    age:23,
    eyeColor:'blue',
    city:'beed'
}
for(const key in object)
    {
        console.log(key);
    }

console.log("&&&&&&&&&&&&&&")
    for(const key in object)
        {
            console.log(object[key]);
        }
console.log("@@@@@@@@@@@@@@@@@@@@@") 

for(const key in object)
    {
        console.log(key,":",object[key]);
    }

console.log("############")

const personkey=Object.keys(object)
console.log(personkey)


console.log("!!!!!!!!!!!!!!!!")

const personvalue=Object.values(object)
console.log(personvalue)