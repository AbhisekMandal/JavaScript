let arr1=[30,10,50,40,60,20,70]; //length:7
const arr2= new Array(['Kantara','Animal','KGF','Pushpa']);//length:1
console.log(arr1);
console.log(arr2);

//Methods

arr1.push(80,90,100); //push() --> add  element to its end
console.log(arr1);

arr1.pop();//delete element from end
console.log(arr1);

arr1.unshift(0);//add start element
console.log(arr1);

arr1.shift()//delete start element
console.log(arr1);

console.log(arr1.length);
console.log(arr2.length);

console.log(arr1.reverse());
console.log(arr1.sort());

console.log(arr1.includes(200));
console.log(arr1.indexOf(50));

//slice() --> does not change the content of the an array
const array =[0,1,2,3,4,5,6,7];
console.log(array.slice(2,5));
console.log(array);

//splice()--> change the content of an array
const array1=[0,1,2,3,4,5,6,7,8,9]
console.log(array1.splice(2,5));
console.log(array1);

const marvelheros=['Thor','Ironman','Spiderman'];
const dcheros=['Superman','flash','Batman'];
const bollywood=['Salman','Akshay','Gobinda']

//concat()
const newheros =marvelheros.concat(dcheros);
console.log(newheros.concat(bollywood));
//spredding by '...'
const allheros= [...marvelheros,...dcheros,...bollywood];
console.log(allheros);

//flat()
const another_arr=[1,5,8,5,[10,56,75,8],[4,[5,6,8],52,63,[45,68,25,45],25,56]]
console.log(another_arr);
console.log(another_arr.flat(Infinity));

//Array.from() --> converting into Array
console.log(Array.isArray("Abhisek"));
console.log(Array.from("Abhisek"));

//Array.of()
let score1=100;
let score2=200;
let score3=300;
let scorces=Array.of(score1,score2,score3)
console.log(scorces);










