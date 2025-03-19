let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener("change", function () {
  console.log("input changed");
  console.log("Final value = ", this.value);
});

let pass = document.querySelector("#pass");

pass.addEventListener("input", function () {
  console.log("input changed");
  console.log("Final value = ", this.value);
});
