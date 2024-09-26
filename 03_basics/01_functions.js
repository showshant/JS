// function addTwoNumbers(num1, num2){
// add = num1 + num2;
// return add;
// }

// console.log(addTwoNumbers(6,9));

// function addTwoNumbers(num1, num2){
// return num1 + num2;
// }
// console.log(addTwoNumbers(6,9));

// function addTwoNumbers(num1, num2){
// return num1 + num2;
// }
// const result = addTwoNumbers(6,9);
// console.log(result);

// function addTwoNumbers(num1, num2){
// let add = num1 + num2;
// return add;
// }
// const ans = addTwoNumbers(7,9);
// // console.log("Resultt:", ans);

// function loginUserName (username){
//     if(username === undefined){
//         console.log("Please enter a username.")
//         return
//     }
//     return `${username} just logged in.`
// }

// console.log(loginUserName('Sushant'))
// const hora = loginUserName()
// console.log(hora);

function calculateCartPrice(val1, val2, ...num1){ //rest operator or spread operator
    return num1;
}

// console.log(calculateCartPrice(200, 500, 400, 2000));

const user = {
    username:'sushant',
    price: 200

}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`)
}

// handleObject(user);
handleObject({
    username:"sam",
    price:400
})


const myNewArray = [200, 400, 600]

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600]))