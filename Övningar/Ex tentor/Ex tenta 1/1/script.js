/* Implement your solution here */



/* Do not touch code below this line, but make sure that these examples work */
if (sum([1, 2, 3]) !== 6) console.error('Invalid solution');
if (sum([]) !== 0) console.error('Invalid solution');
if (sum([7, 2]) !== 9) console.error('Invalid solution');
if (sum([1, 2, 3, 4, 5, 6, 7, 8, 9]) !== 45) console.error('Invalid solution');

//***************************************************************************


function sum (ar) {
 let total = 0;
 for ( let i = 0; i < ar.length; i++) {
   total += ar[i];
 }
return total;
}

console.log(sum([1, 2, 3]));
console.log(sum([]));
console.log(sum([7, 2]));
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));