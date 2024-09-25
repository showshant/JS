// array

const myArray = [0, 1, 2, 3, 4, 5]
const myArray2 = new Array (0, 1, 2, 3, 4, 5)
const heroes = ["spiderman", "batman", "thor", "antman"]

// console.log(myArray[4]);
// console.log(heroes);
// console.log(myArray2);

//Array methods

// myArray.push(6, 7, 6)
// myArray.push(8)
// console.log(myArray);

// myArray.pop() //last element popped
// console.log(myArray);

// myArray.unshift(9) //adds at the beginning of the array
// console.log(myArray);

// myArray.shift(1) //removes the first element from the array
// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(1));

const newarray = myArray.join()

// console.log(myArray);
// console.log(newarray)

// console.log(typeof newarray)

// slice, splice
// const myArray = [0, 1, 2, 3, 4, 5]
console.log("A", myArray);

const myN1 = myArray.slice(1, 3)

console.log(myN1);
console.log('B', myArray)

const myN2 = myArray.splice(1, 3)
console.log('C', myArray)

console.log(myN2);
