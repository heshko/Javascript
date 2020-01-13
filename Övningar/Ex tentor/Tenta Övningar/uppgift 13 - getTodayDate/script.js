/* Uppgift 13

I script.js skapa en funktion getTodayDate som inte tar några argument. 
Funktionen ska returnera dagens datum i formatet: Wednesday 12 December 2018.

/* Implement your solution here */

// I script.js skapa en funktion getTodayDate som inte tar några argument. 
// Funktionen ska returnera dagens datum i formatet: Wednesday 12 December 2018.


function getTodayDate() {
  let todayDate = new Date();
  let yy = todayDate.getFullYear();
  let months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
  let mm = months[todayDate.getMonth()];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dd = todayDate.getDate();
  let day = days[todayDate.getDay()];
  // console.log(day, dd, mm, yy);
  todayDate = day + " " + dd + " " + mm + " " + yy;
  return todayDate; 
}

console.log(getTodayDate());



/* Implement your solution here */
