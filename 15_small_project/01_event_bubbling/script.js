let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function () {
  console.log("Div Clicked");
});

ul.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Ul Clicked");
});

for (li of lis) {
  li.addEventListener("click", function () {
    event.stopPropagation();
    console.log("Li Clicked");
  });
}

//even bubbling lai rokna use event.stopPropagation()
