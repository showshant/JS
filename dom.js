// selection id, class, tag

// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

// document.querySelector

//select and save
// let btn = document.querySelector('button');
// btn.textContent = "Starting..."

// let h1 = document.querySelector('h1');
// h1.textContent += " Nothing man..."

// let h2 = document.querySelector('h2')
// h2.innerHTML = " <i>K ho yo</i>"
// h2.style.color = 'red';
// // h2.style.fontFamily = "gilroy";
// h2.style.fontSize= '16px';

// create element
// let h1 = document.createElement('h1')
// h1.textContent = "Good Morning"
// h1.classList.add("makeitred")

// // kahaparrakhoge.appendchild()
// document.querySelector('body').appendChild(h1);

// var img  = document.createElement('img')
// img.src = 'https://images.unsplash.com/photo-1726661025462-b0ddd7a363a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'
// document.querySelector('body').appendChild(img)
// document.querySelector('body').removeChild(img)

// //event listener
// var button = document.querySelector('button')
// button.addEventListener('mouseover', function(){
//     button.textContent = 'Starting';
//     button.style.backgroundColor = 'red'
// })

// button.addEventListener('mouseleave', function(){
//     button.textContent = 'Click Me';
//     button.style.backgroundColor = 'white'
// })

// document.querySelector("body")
// .addEventListener("mousemove", function(e){
//     console.log(e);

// })

let btns = document.querySelectorAll("button");

// btn.onclick = function(){
//     console.log("sup mate");

// }

//or

for (btn of btns) {
  btn.onclick = sayHello;
  btn.onmouseenter = function(){
    console.log('hello')
  }
}
function sayHello() {
  console.log("Hello");
}


