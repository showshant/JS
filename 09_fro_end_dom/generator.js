// generators
// you can pause the execution and you can say to do next step and you can ....

// function* printNums() {
//   console.log("started");

//   yield 1;
//   console.log("first done");

//   yield 2;
//   console.log("second done");

//   yield 3;
// }

// const ans = printNums()
// ans.next()

function* allNums() {
  for (let i = 1; i < 11; i++) {
    yield i;
  }
}

const a = allNums();

console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
