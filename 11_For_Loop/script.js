document.getElementById('h').innerHTML="Loop in javascript"

//for loops 
for(let i=0;i<=10;i++)
    {
        console.log(i)

    }
    for(let k=1;k<6;k++)
        {
           
            console.log(k*3)
        }
   //check if the number is even
   console.log("even number are hare")
   let number = prompt('Enter any number: ');  
   number = parseInt(number); // Convert the input to an integer
   
   // Ensure the input is a valid number
   if (isNaN(number)) {
       document.write("Please enter a valid number.");
   } else {
       // Loop from 1 to the entered number
       for (let i = 1; i <= number; i++) {
           if (i % 2 == 0) {
               console.log(i);
               document.write("<br>" + i);
           }
       }
   }