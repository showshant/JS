let gameSequence = [];
let userSequence = [];

let started = false;
let level = 0;

let h2 = document.querySelector('h2')
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

function btnFlash(){
    
}

function levelUp() {
  level++;
  h2.innerText = `level ${level}`
}

btnFlash();