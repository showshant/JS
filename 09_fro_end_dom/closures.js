// closures

// function abcd() {
//   let a = 20;
//   return function () {
//     console.log(a);
//   };
// }
// let b = abcd();
// b();

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// let fun = counter();
// fun();
// fun();
// fun();
// fun();
// fun();
// fun();
// fun();
// fun();
// fun();
// fun();

function timer() {
    var a = 14;
    return setTimeout(function () {
      console.log(a);
    }, 5000);
  }
  var a = timer();
  