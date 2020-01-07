// Uppgift 1

// I script.js filen skapa en funktion min som tar en array som argument. 
// Arrayen innehåller objekt som värden och alla objekt har nyckeln value som är ett nummer. 
// Funktionen ska returnera det objekt som har det lägsta värdet satt i sin value nyckel. Se filen för ett exempel.


/* Implement your solution here */

function min (array){        // skapa en function

let minValue = {            // skapa ett objekt
  value: array[0].value,   // Value i value starta från 0
}

for (let i = 0; i < array.length; i++) { // for loop
  
  if (minValue.value > array[i].value) {        // leta min value 
    minValue.value = array[i].value;            // uppdatera minValue
  }
}
return minValue;
}

console.log((min([{value: 3}, {value: 7}, {value: -1}, {value: 5}, {value: 100}]).value));

/* Do not touch the code below this line, but make sure the examples work */

if (min([{value: 3}, {value: 7}, {value: -1}, {value: 5}, {value: 100}]).value !== -1) console.error('Invalid solution');
else console.log('Solved!');