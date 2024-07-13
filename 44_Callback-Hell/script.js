function getCheese(callback){
    setTimeout(() => {
        const cheese="🍕"
        console.log("here is cheese",cheese);
        callback(cheese)
    }, 3000);
}
function makeDough(cheese, callback){
    setTimeout(()=>{
        const dough=cheese+"💕";
        console.log('here is the dough',dough)
        callback(dough)
    },2000)
}

getCheese((cheese)=>{
    // console.log("got the cheese",cheese)
    makeDough(cheese,(dough)=>{
          console.log("got my dough",dough);
    })
}); 