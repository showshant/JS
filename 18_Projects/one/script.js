// const red = document.getElementById("red");
// const blue = document.getElementById("blue");
// const green = document.getElementById("green");
// const yellow = document.getElementById("yellow");
// const purple = document.getElementById("purple");
// const body = document.querySelector("body");

// red.addEventListener("click", () => {
//   body.style.backgroundColor = "red";
// });
// blue.addEventListener("click", () => {
//   body.style.backgroundColor = "blue";
// });
// green.addEventListener("click", () => {
//   body.style.backgroundColor = "green";
// });
// yellow.addEventListener("click", () => {
//   body.style.backgroundColor = "yellow";
// });
// purple.addEventListener("click", () => {
//   body.style.backgroundColor = "purple";
// });

// const buttons = document.querySelectorAll("button");
// const body = document.querySelector("body");
// buttons.forEach((button) => {
//   button.addEventListener("click", function (e) {
//     //   console.log(button.id);
//     body.style.backgroundColor = button.id;
//   });
// });

//event bubbling and event capturing

// addeventlistener (event, callback, capture)

// const root = document.getElementById("root");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// child.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("child is Clicked!!");
// }, true); // true means capturing phase

// parent.addEventListener("click", (e) => {
//   e.stopPropagation();

//   console.log("parent is Clicked!!");
// });
// root.addEventListener("click", (e) => {
//   e.stopPropagation();

//   console.log("Grandpa is Clicked!!");
// });

const root = document.getElementById("root");
//event delegation
root.addEventListener("click", (e) => {
//   console.log(e.target.tagName);
  if (e.target.tagName === "BUTTON") {
    document.body.style.backgroundColor = e.target.id;
  }
});

