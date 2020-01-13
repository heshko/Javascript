/* Uppgift 4

I script.js ligger det en funktion: getData som returnerar en promise med data.

Du ska göra tre saker:

   1. Skapa en funktion wait som tar ett argument. Funktionen ska returnera en promise som resolvar med argumentet efter 1 sekund.

   2. Skriv kod som anropar funktionen getData och skickar in datan in i wait funktionen. När du får tillbaka datan från wait 
    ska du rendera datan som en tabell i main elementet. (Det är samma data som i förra övningen, 
    så du får lov att kopiera över den funktionen som gör renderingen).

   3. I HTML:en ligger det ett p element med texten "loading...". 
    Denna texten ska först visas när vi gör anropet till getData, och därefter gömmas när vi har fått datan tillbaka
    från wait funktionen. Men du får inte ta bort elementet från DOM:en.
 */

/* Implement your solution here */

getData().then((values) => {                // .then kallar på resolve
  return wait(values); // skicka till vår wait function
  })
  .then((values) => { // sen skickas till renderTable functionen och parsa den 
    renderTable(JSON.parse(values).elements)
});


function renderTable (data) { 

  let createTable = document.createElement("table");
  document.querySelector("main").appendChild(createTable);
  
  let createThead = document.createElement("thead");
  document.querySelector("table").appendChild(createThead);
  
  let createTbody = document.createElement("tbody");
  document.querySelector("table").appendChild(createTbody);
  
  let createTr = document.createElement("tr");
  document.querySelector("thead").appendChild(createTr);
  
  let createThName = document.createElement("th");
  createThName.textContent = "Name";
  document.querySelector("tr").appendChild(createThName);
  
  let createThNumber = document.createElement("th");
  createThNumber.textContent = "Number";
  document.querySelector("tr").appendChild(createThNumber);
  
  let createThSymbol = document.createElement("th");
  createThSymbol.textContent = "Symbol";
  document.querySelector("tr").appendChild(createThSymbol);
  
  
  createTable.style.border = " solid black 1px";
  
  data.forEach(element => {
  
  //skapa element
  const trEl = document.createElement("tr");
  const tdNameEl = document.createElement("td");
  const tdNumberEl = document.createElement("td");
  const tdSymbolEl = document.createElement("td");
  
  //Ger dom ett innehåll
  
  tdNameEl.textContent = element.name;
  tdNumberEl.textContent = element.number;
  tdSymbolEl.textContent = element.symbol;
  
  // Ger dom en plats i Dom
  
  createTbody.appendChild(trEl);
  trEl.appendChild(tdNameEl);
  trEl.appendChild(tdNumberEl);
  trEl.appendChild(tdSymbolEl);
  });
  }

  function wait (values) {
    return new Promise(function(resolve, reject){
      setTimeout(() => {   
        resolve(values);
      }, 3000);
    })
  }

/* Do NOT touch this function */
function getData() {
  return new Promise(function(resolve, reject) {
    resolve(
      JSON.stringify({
        elements: [
          {
            name: "Hydrogen",
            number: 1,
            symbol: "H"
          },
          {
            name: "Helium",
            number: 2,
            symbol: "He"
          },
          {
            name: "Lithium",
            number: 3,
            symbol: "Li"
          },
          {
            name: "Beryllium",
            number: 4,
            symbol: "Be"
          },
          {
            name: "Boron",
            number: 5,
            symbol: "B"
          }
        ]
      })
    );
  });
}
