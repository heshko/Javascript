
/* Uppgift 18

I index.html ligger det en knapp och ett p-element. 
Skapa en räknare i JS som håller koll på hur många 
gånger vi har tryckt på knappen. 
Visa antalet i p-elementet.
*/

document.querySelector("button").addEventListener("click", onClick);

let count = 0;

function onClick () {
  document.querySelector("p").textContent = count++;
}



