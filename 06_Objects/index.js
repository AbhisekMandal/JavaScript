// singleton
// object creating using constructor
//Object.create

//Object literal
const user={
    name:'Abhisek',
    Age:'25',
    location:'Odisha',
    email:"abhisek12@gmail.com",
    islogedin:false,
    lasLogin:['Monday','Tuesday']
};
console.log(user);
console.log(user.email);
console.log(user['email']);

console.log(Object.keys(user));
console.log(Object.values(user));




