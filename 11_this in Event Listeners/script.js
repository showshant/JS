let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let box = document.querySelector(".box");
let button = document.querySelector("button");

// p.addEventListener("click", function () {
//   console.log(this.innerText);
//   this.style.backgroundColor = "blue";
// });

// h1.addEventListener("click", function () {
//   console.log(this.innerText);
//   this.style.backgroundColor = "blue";
// });

// h3.addEventListener("click", function () {
//   console.log(this.innerText);
//   this.style.backgroundColor = "blue";
// });
// button.addEventListener("click", function () {
//   console.log(this.innerText);
//   this.style.backgroundColor = "blue";
// });

// box.addEventListener("click", function () {
//   console.log(this.innerText);
//   this.style.backgroundColor = "blue";
// });

// repetition and therefore redundant

// better approach

function changeColor() {
  console.log(this.innerText);
  this.style.backgroundColor = "blue";
}

p.addEventListener("click",changeColor)
h1.addEventListener("click",changeColor)
h3.addEventListener("click",changeColor)
box.addEventListener("click",changeColor)
button.addEventListener("click",changeColor)