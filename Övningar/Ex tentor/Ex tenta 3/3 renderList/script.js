/* Skapa en funktion renderTable som tar ett objekt som innehåller en array som argument.
Rendera tabellen till DOM:en från funktionen. Tabellen ska renderas i .container elementet. 
Få exemplet som är skrivet i script.js att fungera. Din funktion behöver inte hantera generiska kolumner, 
utan det räcker att exemplet som är angett fungerar. Din tabell behöver innehålla en header rad som indikerar namnen på kolumnerna. 
Värdena under name nycklarna måste också skrivas ut med stora bokstäver. 
*/


/* Implement your solution here */


function renderTable (data) { 

let createTable = document.createElement("table");
document.querySelector(".container").appendChild(createTable);

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


createTable.style.border = " solid black 1px"

data.elements.forEach(element => {

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


/* Do not touch anything below this line */
const data = {
  "elements": [
    {
      "name": "Hydrogen", 
      "number": 1, 
      "symbol": "H", 
    }, 
    {
      "name": "Helium", 
      "number": 2, 
      "symbol": "He", 
    }, 
    {
      "name": "Lithium", 
      "number": 3, 
      "symbol": "Li", 
    }, 
    {
      "name": "Beryllium", 
      "number": 4, 
      "symbol": "Be", 
    }, 
    {
      "name": "Boron", 
      "number": 5, 
      "symbol": "B", 
    }, 
  ]
}
renderTable(data);