// reduce

const myNums = [1, 2, 3, 4, 5];
const myTotal = myNums.reduce(function(acc, currVal){
    // console.log(`acc: ${acc} and currval: ${currVal}.`)
    return acc + currVal
}, 8)

// console.log(myTotal); // 23



// const initialVal = 0;
// const result = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialVal )
// console.log(result);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 299,
    },
    {
        itemName: 'py course',
        price: 99,
    },
    {
        itemName: 'data science course',
        price: 12299,
    },
    {
        itemName: 'mobile development course',
        price: 1999,
    },
    {
        itemName: 'cpp course',
        price: 199,
    },
]

const total = shoppingCart.reduce(( acc, item) =>  acc + item.price, 0)

console.log(`total price is: ${total}.`)