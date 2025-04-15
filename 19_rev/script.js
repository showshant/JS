const form = document.querySelector("form");

// Event Type
// 1: input
// 2:Change
// 3: focus
// 4: blur or focusout
// 5: click
// 6: dblclick
// 7: submit
// 8: reset
// 9:FormData

// form.addEventListener("input", function (e) {
//   console.log(e.target.value);
// });

// form.addEventListener("change", function (e) {
//   console.log(e.target.value);
// });

// focus doesnot bubble & focusin bubbles

// form.addEventListener("focusin", function (e) {
//   console.log(e.target.value);
// });

// form.addEventListener("focusout", function (e) {
//   console.log(e.target.value);
// });

// form.addEventListener("dblclick", function () {
//   console.log("double clicked");
// });

// form.addEventListener("submit", function (e) {
//   // console.log(e.target.value);
//   console.log("form submitted");

// });

// form.addEventListener("reset", function (e) {
//   console.log("form reset");

// });

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);

  for(let [key,value] of data.entries()) //. keys() values() entries()
    console.log(key, value);
    
  // console.log(Array.from(data.keys()));
  // console.log(Array.from(data.values()));

  // const first = document.getElementById("first");
  // console.log(first.value);

  // const second = document.getElementById("second");
  // console.log(second.value);

  // const result = document.getElementById("result");
  // result.innerText = `${first.value} ${second.value} is a good boy.`;
});
