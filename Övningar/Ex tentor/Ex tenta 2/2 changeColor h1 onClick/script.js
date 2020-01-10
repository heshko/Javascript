/*  # Uppgift 2

Lägg till eventlyssnare på knapparna i `index.html` filen. 
När man trycker på en knapp ska du ändra texten i h1 elementet till att vara samma som texten på knappen vi tryckte på. 
Färgen på h1 elementet ska vara samma som färgen på knappen vi tryckte på också. */


// querySelectorAll får ut en array med alla button

let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", onClick);
}

function onClick () {
  console.log(this.classList.value);
  let color = this.classList.value;
  document.querySelector("h1").style.color = color;
  document.querySelector("h1").textContent = color;

  let förälder = document.querySelector(".container");
  let vadJagVillLäggaUt = document.querySelector("h1");
  //document.querySelector(".container").appendChild(document.querySelector("h1"));

  förälder.appendChild(vadJagVillLäggaUt);
  

  // parentNode.appendChild("vad du vill lägga ut");

}

// Förälder.LäggMigLängstNer("vad jag vill lägga ut");
/* Implement your solution here */


