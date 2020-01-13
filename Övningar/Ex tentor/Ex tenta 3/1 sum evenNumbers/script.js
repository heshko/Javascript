/* Skriv en funktion evenSumToN som ska ta ett nummer som argument. 
Funktionen ska returnera summan av alla jämna tal från 0 upp till (inkl) det numret som är angett i argumentet. 
Exempel: evenSumToN(10) === 30 */


function evenSumToN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i += 2){
      sum += i;
  }
  console.log(sum);
  return sum;
}

/* Implement your solution here */


// function sum (a) {
// return a.reduce((x, y) => x + y, 0);
// }


/* Do not touch code below this line, but make sure that these examples work */
if (evenSumToN(10) !== 30) console.error('Invalid solution');
else if (evenSumToN(0) !== 0) console.error('Invalid solution');
else if (evenSumToN(9) !== 20) console.error('Invalid solution');
else if (evenSumToN(100) !== 2550) console.error('Invalid solution');
else console.log('Solved!');
