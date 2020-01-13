/* I index.html ligger det ett input-fält. Under fältet ligger det två p-element. 
Du ska skriva JS kod så att när vi skriver in något i input-fältet så ska du i 
.key-elementet visa vilken knapp vi tryckte på och i .upperCase elementet ska du visa 
allt vi har skrivit hittils konverterat till stora bokstäver.
*/


document.querySelector("input").addEventListener("input", onInput);

document.querySelector("input").addEventListener("keydown", onKeydown);

function onKeydown (e) {
document.querySelector(".key").textContent = e.keycode.toString();
}


function onInput (e) {
  document.querySelector(".upperCase").textContent = this.value.toUpperCase();
}