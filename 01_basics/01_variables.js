const accountId = 144553
let accountEmail= "sushantbas@gmail.com"
var accountPassword = "12345"
accountCity = "Kathmandu"
let accountState;

// accountId = 2 // not allowed

accountEmail = "kfhld@yahhoo.com"
accountPassword = "2125"
accountCity = "Bhaktapur"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword,accountCity, accountState])
