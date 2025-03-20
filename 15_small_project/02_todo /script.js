let button = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

button.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;
  ul.appendChild(item);
  console.log(inp.value);
  inp.value = "";

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");
  item.appendChild(delBtn);
});

ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove(); // Remove the clicked item
  }
  console.log("deleted");
});
