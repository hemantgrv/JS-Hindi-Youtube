const accountId = 144553
let accountEmail = "hemant@google.com"
var accountPass = "12345"
accountCity = "Virar"
let accountState;

// accountId = 2 // not allowed cause it is constant 

accountEmail = "hg@google.com"
accountPass = "212121"
accountCity = "Banglore"

console.log(accountId, accountEmail, accountPass, accountCity);

// display output in tabular format
console.table([accountId, accountEmail, accountPass, accountCity, accountState]); 

/*
prefer not to use var
because of issue in block scope and functional scope
*/
