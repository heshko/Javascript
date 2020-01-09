/*Uppgift 6

I script.js ligger det en funktion getData. Denna funktion returnerar en promise med JSON data. 
Skriv kod i script.js som kallar på funktionen getData och använder datan den skickar till att rendera en lista. 
Listan ska renderas i .container elementet. */

/* Implement your solution here */

getData().then(function(countriesData) {
  const listCountries = JSON.parse(countriesData);
  console.log(listCountries);
  rederList(listCountries.data);
});

function rederList (array) {
  listCountries = document.createElement("ol");
  document.querySelector(".container").appendChild(listCountries);

  for (let i = 0; i < array.length; i++) {

    // skapa element

     const listCountriesName = document.createElement("li");

     // Ger dom ett innehåll

     listCountriesName.textContent = array[i];

     // Ger dom en plats i DOM

     listCountries.appendChild(listCountriesName);    
  }
}


/* Do not touch anything below this line */
function getData() {
  return new Promise(function(resolve, reject) {
    let t = Math.random() * 2000 + 1000;
    setTimeout(function() {
      resolve(JSON.stringify({
        data: [
          'Sweden',
          'Denmark',
          'Norway',
          'Finland'
        ]
      }));
    }, t);
  });
}