const username = []

if (username) {
    console.log("Got the username.");
} else {      
    console.log("Didn't get the username.");
}

// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if(username.length === 0){
//     console.log("Array is empty.");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty.");
}

// Nullish Coalescing Operator (??): null undefined

let val;
// val = 5??10
// val = null??10

// val = undefined ?? 15
val = null??11??20
// console.log(val);

// Ternary Operator

// condtion?true:false

const iceTeaPrice = 100;

iceTeaPrice <= 80? console.log("Less than 80."):console.log("more than 80.")


