// const userObjects={
//     firstName:'bharat',
//     lastName:'Kadam',
//     Age:23
// }
// console.log(userObjects)

const user = {
    firstName: 'Bharat',
    'last-name': 'Kadam',
    bharat: 'Developer',
    address: {
        city: 'Beed',
        pincode: '23452',
        state: 'Karnataka'
    }
};

user.king = 'king';
user['king-of'] = 'true';
console.log(user.firstName);
console.log(user['last-name']);
console.log(user.bharat);
console.log(user.firstName);
user.age = 23;
console.log(user.age);
