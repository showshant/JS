let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

//   console.dir(form);

  let user = document.querySelector("#user");
  let pass = document.querySelector("#pass");

  console.log(user.value);
  console.log(pass.value);

  alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});
