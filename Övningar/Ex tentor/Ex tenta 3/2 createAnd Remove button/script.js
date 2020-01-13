/* I index.html ligger det en knapp .addButton. Lägg till eventlyssare så att när man trycker på 
knappen ska en ny knapp skapas och läggas till längst ner i .container elementet. 
Den nya knappen ska i texten indikera hur många knappar som har skapats tidigare. 
När man trycker på en av de skapade knapparna, ska den knappen man trycker på tas bort helt. */


/* Implement your solution here */

let i = 0;

document.querySelector(".addButton").addEventListener("click", createButton)

function createButton() {
  var createButtonEl = document.createElement("button");
  createButtonEl.textContent = "button " +  `${i}`;
  i++;
  document.querySelector(".container").appendChild(createButtonEl)
  createButtonEl.addEventListener("click", removeButton);
}

function removeButton () {
  console.log(this);
  this.remove();
}

