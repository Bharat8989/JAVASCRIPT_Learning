//some 
const evenNumber=[2,4,6,10,8,12]

const result=evenNumber.some((num)=>{
    
    return num >4
})
console.log(result)


//every 
const result1=evenNumber.every((num,i)=>{
    return num%2==0;
})
console.log(result1)