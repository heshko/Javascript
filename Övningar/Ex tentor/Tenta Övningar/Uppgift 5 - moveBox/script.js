// Uppgift 5

/* I index.html ligger det två knappar och en box. 
 När vi trycker på en av knapparna ska boxen antingen röra sig 10 pixlar åt vänster eller höger från sin nuvarande position. 
 Lägg på eventlyssnare på knapparna och lös problemet.
*/ 

let pos = 0;

document.getElementById("left").addEventListener("click", leftBox)

function leftBox () {
  pos -= 10;
  document.getElementById("box").style.transform = "translateX(" + pos + "px)";
}

document.getElementById("right").addEventListener("click", rightBox)

function rightBox () {
  pos += 10;
  document.getElementById("box").style.transform = "translateX(" + pos + "px)";
  //document.getElementById("box").style.position = "absolute"; "10px";
}