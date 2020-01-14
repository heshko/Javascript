/* Uppgift 17

I script.js skriv en funktion countWord som tar två olika strängar som argument. 
Funktionen ska returnera hur ord av andra strängen det finns i första. Funktionen ska inte göra skillnad på versaler och gemener. 
Dvs "hello" är samma ord som "Hello". Se filen för exempel.


/* Implement your solution here */
function countWord(str, word) {
  let filteredStr = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) !== "," && str.charAt(i) !== ".") {
          filteredStr += str.charAt(i);
      }
  }

  const words = filteredStr.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
      if (words[i] === word.toLowerCase()) {
          count++;
      } 
  }
  
  console.log(count);
  return count;
}

/* Do not touch anything below this line */

let text =
  "Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web. JavaScript enables interactive web pages and thus is an essential part of web applications. The vast majority of websites use it, and all major web browsers have a dedicated JavaScript engine to execute it.";

if (
  countWord(text, "HTML") === 1 &&
  countWord(text, "JavaScript") === 3 &&
  countWord(text, "web") === 4
)
  console.log("Solved!");
else console.error("Invalid solution");
