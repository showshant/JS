// const coding = ["js", "java", "python", "ruby", "cpp"]


// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const store = myNums.filter( (num) => {
   return num % 2 ==0 ; // even numbers
})
// console.log(store);
// const store = myNums.filter( (num) => {
//    return num > 4;
// })
// console.log(store);


const numbers = [5, 12, 8, 130, 44];
const filteredNumbers = numbers.filter( (num) => num > 10 )
// console.log(filteredNumbers);

// const newNums = []

// myNums.forEach( (num) => {
//     if (num>4) {
//         newNums.push(num)
//     }
// }  )

// console.log(newNums);

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => {return num + 10} )

const newNums = myNumers
            .map((num) => num * 10)
            .map( (num) => num + 1 )
            .filter((num) => num > 50)
console.log(newNums);
