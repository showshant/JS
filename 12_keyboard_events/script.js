let input = document.querySelector("input");

input.addEventListener("keydown", function (event) {
    console.log("Key was pressed.");
    console.log(event);
});
input.addEventListener("keyup", function () {
    console.log("Key was released.");
});



// let button = document.querySelector("button");
// button.addEventListener("click", function (event) {
//   console.log(event);
//   console.log("button clicked");
// });
// button.addEventListener("dblclick", function (event) {
//   console.log(event);
//   console.log("button clicked");
// });
