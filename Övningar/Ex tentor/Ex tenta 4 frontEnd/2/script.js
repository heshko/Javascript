/* # Uppgift 2

Lägg till eventlyssnare på selecten i `index.html` filen.
När man väljer ett av alternativen ska du ändra bakgrundsfärgen
på `.container` elementet till att vara samma färg som vi valde.
Om du vill kan du använda de existerande classerna som är definerade i .css filen. */


/* Implement your solution here */


let container = document.querySelector(".container");
let select = document.querySelector("select");

select.addEventListener("change", onChange);

function onChange () {
container.style.backgroundColor = select.value;
}

// let container = document.querySelector('.container');
// let select = document.querySelector('select');


// select.addEventListener('change', e => {
//   container.style.backgroundColor = select.value;
// });
