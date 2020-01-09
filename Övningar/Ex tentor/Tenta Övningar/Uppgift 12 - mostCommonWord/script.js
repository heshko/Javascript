/* Uppgift 12

I script.js skapa en funktion mostCommonWord som tar en sträng som argument. 
Funktionen ska returnera det ordet som förekom flest gånger i strängen. */

/* Implement your solution here */


function mostCommonWord(str) {

  let sentence = str.split(" ");
  let counts = {};
  let compare = 0;
  let mostFrequent;

  const array = sentence;

    for (var i = 0, len = array.length; i < len; i++) {
      var word = array[i].toLowerCase();
  
      if (counts[word] === undefined) {
        counts[word] = 1;
      } else {
        counts[word] = counts[word] + 1;
      }
      if (counts[word] > compare) {
        compare = counts[word];
        mostFrequent = array[i];
      }
    }
    return mostFrequent;
}


/* Do not touch anything below this line */
if (mostCommonWord("Hello this is a text that is cool and stuff") !== "is")
  console.error("Invalid solution");
else console.log("Solved!");
