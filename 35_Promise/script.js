const ticket =new Promise(function(resolve, reject){
    const isBoarded=true;
    if(isBoarded){
        resolve("you are not is the flight")
    }
    else{
        reject("your flight has been cancelled")
    }
});
// async function checkTicket(){
//     try{
//      const result=await ticket;
//      console.log("here is the ticket",result)
//     }
//     catch(error){
//      console.log("oh no",error)
//     }
//     finally{
//         console.log("i will always be executed")
//     }
// }
// checkTicket();

ticket 
     .then((data)=>{
        console.log("wohoo",data)
 
     })
     .catch((data)=>{
        console.log("oh on",data)

     })
     .finally(()=>{
        console.log("i will always be executed")
     })



     const makeDough = function(cheese) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const dough = cheese + " 🍕";
                console.log("Here is the dough:", dough);
                reject(cheese);
            }, 2000);
        });
    };
    
    // Calling the function and handling the promise
    makeDough("Cheese")
      .then((cheese) => {
        console.log("Here is the cheese:", cheese);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
    //   .finally(() => {
    //     console.log("Welcome to the shop");
    //   });