/* # Uppgift 1

Skriv en funktion `sumAboveN` som tar en array av nummer som 
första argument och ett nummer som andra argument. Funktionen 
ska returnera summan av alla tal i arrayen som är större än 
numret som ges som andra argument. Titta i script.js efter exempel.

/* Implement your solution here */

// function sumAboveN(numbers, n) {
//   let sum = 0;

//   for (number of numbers) {
//     if (number > n) {
//       sum += number;
//     }
//   }
//   console.log(sum);
//   return sum;
// }

function sumAboveN(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      sum += arr[i];
    }
  }
  console.log(sum);
  return sum;
}

/* Do not touch code below this line, but make sure that these examples work */
if (sumAboveN([1, 2, 3], 2) !== 3) console.error("Invalid solution");
if (sumAboveN([], 0) !== 0) console.error("Invalid solution");
if (sumAboveN([7, 2, 3, 9], 4) !== 16) console.error("Invalid solution");
if (sumAboveN([1, 2, 3, 4, 5, 6, 7, 8, 9], 0) !== 45)
  console.error("Invalid solution");