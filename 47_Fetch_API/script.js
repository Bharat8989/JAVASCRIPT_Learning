// fetch('HELLO',{
//     method:'bHARAT'
// })
//    .then((ea)=>ea.json())
//     // return ea.json()
//    .then((data)=>{
//     console.log(data);
//    })
    

fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: 'Muhammad',
      lastName: 'Ovi',
      age: 250,
      /* other user data */
    })
  })
  .then(res => res.json())
  .then(console.log);

  fetch('https://dummyjson.com/users/add', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: 'Muhammad',
      lastName: 'Ovi',
      age: 250,
      /* other user data */
    })
  })
  .then(res => res.json())
  .then(console.log);