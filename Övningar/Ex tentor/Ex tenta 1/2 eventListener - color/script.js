/* Implement your solution here */



// document.querySelector(".red").addEventListener("click", redbox)

// function redbox (){
//   document.querySelector(".container").style.backgroundColor = "red";
// }


// document.querySelector(".green").addEventListener("click", greenbox)

// function greenbox () {
//   document.querySelector(".container").style.backgroundColor = "green";
// }


// document.querySelector(".blue").addEventListener("click", bluebox)

// function bluebox () {
//   document.querySelector(".container").style.backgroundColor = "blue";
// }

const colors = ["red", "green", "blue"];

const button = document.getElementsByTagName("button");
const divEl = document.querySelector(".container");
console.log(this);

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", onClick);
}

function onClick(){
  divEl.style.backgroundColor = this.className;
}

