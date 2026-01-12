//console.log(`Hello`);
//console.log(`I love pizza`);

//window.alert(` This is an alert! `);
//window.alert(` This is an alert! `);

// Comment
/* Comment */

//Changing the text content using javascript
document.getElementById("myH1").textContent = `Hello`; // originially myH1
document.getElementById("myP").textContent = `I like Pizza`;

//1. declaration let x;
//2. assignment x = 100;

let pangan = "Dan";//string
let favFood = "Macaroni";//string

let online = true; //boolean variable, used as flag, like is an item for sale or not


let age = 25; 
let price = 10.99;

console.log(price);
console.log(age);
console.log(`you are ${age} years old`); // variable sentence
console.log(`The price of this meal is ${price} `);

console.log(typeof pangan);
console.log(`I'm ${pangan} and my favorite food is ${favFood}`);

console.log(`${pangan} is online: ${online}`);

// Conditional Statements

let student1 = true;

if (student1 == true){
    console.log(`Enrolled`);
}
else{
    console.log(`Not Enrolled`);
}