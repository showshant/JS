const user ={
    username: "sushant",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "salmon"
// user.welcomeMessage()

// console.log(this);

// function chai()
// {
//     let username = "sushant"
//     console.log(this.username)
// }

// chai()


// const chai = function(){
//     let username = "sushant";
//     console.log(this.username);
// }

// chai()
const chai = () =>{
    let username = "sushant";
    console.log(this.username);
}
// chai()

// syntax () => {}
// const addTwo = (num1, num2) => {
//     return num1 + num2;

// }


// implicit return
// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => ({
    username: "sushant"
});
console.log(addTwo(3,9))

