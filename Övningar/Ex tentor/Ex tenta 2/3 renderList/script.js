/* # Uppgift 3

Skapa en funktion `renderTable` som tar en array som argument. Rendera tabellen till DOM:en från funktionen. 
Tabellen ska renderas i `main` elementet. Få exemplet som är skrivet i `script.js` att fungera. 
Din funktion behöver inte hantera generiska kolumner, utan det räcker att exemplet som är angett fungerar. 
Din tabell behöver innehålla en header rad som indikerar namnen på kolumnerna. */



/* Implement your solution here */
function renderTable (array) {

  let createTable = document.createElement("table");
  document.querySelector("main").appendChild(createTable);

  let createThead = document.createElement("thead");
  createTable.appendChild(createThead);

  let createTbody = document.createElement("tbody");
  createTable.appendChild(createTbody)

  let createTr = document.createElement("tr");
  createThead.appendChild(createTr);

  let createThName = document.createElement("th");
  createThName.textContent = "Name";
  createTr.appendChild(createThName);

  let createThGender = document.createElement("th");
  createThGender.textContent = "Gender";
  createTr.appendChild(createThGender);

  let createThAge = document.createElement("th");
  createThAge.textContent = "Age";
  createTr.appendChild(createThAge);

  createTable.style.border = " solid black 1px"

  for (let i = 0; i < array.length; i++) {
    
    //skapa element

    const trEl = document.createElement("tr");
    const tdNameEl = document.createElement("td");
    const tdGenderEl = document.createElement("td");
    const tdAgeEl = document.createElement("td");


    //Ger dom ett innehåll

    tdNameEl.textContent = array[i].name;
    tdGenderEl.textContent = array[i].gender;
    tdAgeEl.textContent = array[i].age;

    
    // Ger dom en plats i Dom

    createTbody.appendChild(trEl);
    trEl.appendChild(tdNameEl);
    trEl.appendChild(tdGenderEl);
    trEl.appendChild(tdAgeEl);
  }
}


/* Do not touch anything below this line */
let data = [
  {name: 'Rachel Green', gender: 'Female', age: 24},
  {name: 'Monica Geller', gender: 'Female', age: 24},
  {name: 'Phoebe Buffay', gender: 'Female', age: 27},
  {name: 'Joey Tribbiani', gender: 'Male', age: 25},
  {name: 'Chandler Bing', gender: 'Male', age: 26},
  {name: 'Ross Geller', gender: 'Male', age: 26},
];
renderTable(data);