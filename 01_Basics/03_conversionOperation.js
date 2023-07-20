/* ========== Type One ========== */
let score = "Hemant";

console.log(typeof score);
console.log(typeof(score)); // can be written as a method

/* ========== Type Two ========== */
let valueInNumber = Number(score);
console.log(typeof valueInNumber);

console.log(valueInNumber);

// "45" => 45
// "45abc" => NaN (not a number)
// true => 1; false => 0

/* ========== Type Three ========== */
let isLoggedIn = 0;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "hemant" => true 


/* ========== Type Four ========== */
let someNumber = "hemant";

let stringNumber = String(someNumber)
console.log(someNumber);
console.log(typeof someNumber);

// 65 => 65
// "" => empty
// "hemant" => string


// **************** Operations ****************

let value = 3;
let negativeValue = -value
// console.log(negativeValue);

/*
Basic operations

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2**3);
console.log(2/2);
console.log(2%2);
*/

let strOne = "hello";
let strTwo = " Hemant";
let string = strOne + strTwo;
console.log(string);

// console.log("1"+ 2);
// console.log(1 + "2");
// console.log("1" + 6 + 2);
// console.log(1 + 6 + "2");

// To study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion