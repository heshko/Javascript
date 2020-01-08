/* Implement your solution here */



document.querySelector(".red").addEventListener("click", redbox)

function redbox (){
  document.querySelector(".container").style.backgroundColor = "red";
}


document.querySelector(".green").addEventListener("click", greenbox)

function greenbox () {
  document.querySelector(".container").style.backgroundColor = "green";
}


document.querySelector(".blue").addEventListener("click", bluebox)

function bluebox () {
  document.querySelector(".container").style.backgroundColor = "blue";
}