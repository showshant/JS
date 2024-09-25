// singleton
//object.create

//object.literals

const mySym = Symbol("key")

const Js_user = {
    name: "sushant",
    "fullname": "susant ddjkvfhsdil",
    [mySym]:"key",
    age: 18,
    location: "ktm", 
    email: "whatsir@yahoo.com",
    isLoggedIn: true,
    lastLoginDays : ["Monday", "Tuesday"]
}

// console.log(Js_user.name);
// console.log(Js_user.email);
// console.log(Js_user["email"]);
// console.log(Js_user["fullname"]);
// console.log(Js_user[mySym]);


// Js_user.isLoggedIn = false
// console.log(Js_user.isLoggedIn)

// Js_user.email= "whatmam@chatgpt.com"
// Object.freeze(Js_user)
// Js_user.email= "whatmam@microsoft.com"
// console.log(Js_user);

Js_user.greeting = function(){
console.log("hello Js user");
}

Js_user.greeting2 = function(){
console.log(`hello Js user, ${this.name}`);
}

console.log(Js_user.greeting());
console.log(Js_user.greeting2());