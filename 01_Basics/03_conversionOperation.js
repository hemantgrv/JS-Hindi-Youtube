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