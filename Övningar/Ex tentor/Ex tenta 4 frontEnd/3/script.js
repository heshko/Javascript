/* # Uppgift 3

I HTML filen finns det en tom `ul` och ett formulär. Lägg till så att när man 
submittar formuläret ska det som är angett i input-fältet läggas till i en ny
`li` som därefter ska läggas i `ul` listan. Input fältet ska även tömmas vid
en submit. Skapa även en knapp i li-elementet. När man trycker på denna 
knapp ska li-elementet tas bort.

Det ska inte gå att lägga in en tom `li`
*/

/* Implement your solution here */

let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  if (input.value) {
    let listEl = document.createElement("li");
    let buttonEl = document.createElement("button");

    buttonEl.textContent = "delete";

    listEl.textContent = input.value;

    input.value = "";
    listEl.appendChild(buttonEl);
    ul.appendChild(listEl);
    buttonEl.addEventListener("click", onClick);
  }
  e.preventDefault();
}

function onClick() {
  this.parentNode.remove();
}


// behövs ej i detta fallet

// let button = document.querySelectorAll("button");

// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener("click", onClick);
// }



// let form = document.querySelector('form');
// let input = document.querySelector('input');
// let ul = document.querySelector('ul');

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   let value = input.value;
//   input.value = "";

//   if (value) {
//     let li = document.createElement('li');
//     li.textContent = value;

//     let button = document.createElement('button');
//     button.textContent = 'Delete me';
//     li.appendChild(button);

//     button.addEventListener('click', () => {
//       ul.removeChild(li);
//     });

//     ul.appendChild(li);
//   }
// });

