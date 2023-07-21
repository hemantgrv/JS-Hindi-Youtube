// Primitive Datatypes
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const temperature = null;

let userName;

const id = Symbol('123');
const anotherId = Symbol('123');
// values are same but both variables different from each other
console.log(id === anotherId);

const bigNumber = 15655531488n; 


// Reference Type (Non-Primitive Datatypes)
// Array, Objects, Functions

const heros = ["Ironman", "Superman", "Batman"];

let myObj = {
    name: "Hemant",
    description: "Hello There!",
    age: 22,
}

const myFuntion = function() {
    console.log("Hello World");
}

console.log(typeof myFuntion);
console.log(typeof heros);