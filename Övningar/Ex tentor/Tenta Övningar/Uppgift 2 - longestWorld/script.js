// Uppgift 2

// Skriv en funktion longestWord som tar en sträng som argument. 
// Funktionen ska returnera det ord i strängen som har flest bokstäver.



/* Implement your solution here */


function longestWord(sentence) {

  var array = sentence.split(' ')

  var word = "";

  for (i = 0; i < array.length; i++) {
    if (array[i].length > word.length) {
      word = array[i];
    }
  }
  return word;
}
console.log(longestWord("I am a computer and I like to calculate stuff"));

/* Do not touch the code below this line, but make sure the examples work */
if (longestWord("I am a computer and I like to calculate stuff") !== "calculate") console.error('Invalid solution');
else console.log('Solved!');