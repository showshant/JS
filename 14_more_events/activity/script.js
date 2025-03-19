let inp = document.querySelector("#text");
let p = document.querySelector("p");
inp.addEventListener("input", function () {
  console.log(inp.value);
  p.innerText = inp.value;
});
