
/* Uppgift 20

I script.js skriv en funktion rollDice som "rullar" 
en tärning och returnerar resultatet. Funktionen ska 
ta ett argument som berättar hur stor tärningen är. 
Om ingenting har angetts som argument, ska funktionen 
anta att storleken är 6.
*/


/* Implement your solution here */
function rollDice(size) {

if (size === undefined) {
  size = 6;
}
let randomNumber = Math.floor(Math.random() * size) + 1;
return randomNumber;
}

console.log(rollDice());
console.log(rollDice(10));