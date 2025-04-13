const accountId=144553 //"const" keyword lock the value
let accountEmail="abhi20@gamil.com"
var accountPassword="12345" // Prefer to not use because of issue in block scope and functional scope
accountCity="jaipur" //It is not a good variable declaration
let accountState; //Variable without initialization

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
accountEmail="mandal20@gmail.com"
accountPassword="112233"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);



