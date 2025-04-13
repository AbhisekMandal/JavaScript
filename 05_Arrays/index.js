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











