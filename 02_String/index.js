let name="Abhisek Mandal";
const gameName =new String("Templ-Run");

console.log(name);
console.log(gameName);

console.log(name[0]);
console.log(gameName[3]);

console.log(gameName.__proto__);

console.log(gameName.charAt(2));
console.log(gameName.charCodeAt('r'));
console.log(gameName.indexOf("R"));
console.log(gameName.toLowerCase());
console.log(gameName.indexOf("a"));


let b=gameName.substring(0,5)
console.log(b);

let c=gameName.slice(0,-2); //we can use negative value in slice();
console.log(c);

const d="      Abhi     ";
console.log(d);
console.log(d.trim());

const url="hhtps://hitesh.com/hotesh%20choudhary"
console.log(url.replace('%','_'));
console.log(url.includes("hirre"));

//split() convert string into array
console.log(gameName.split('-'));











