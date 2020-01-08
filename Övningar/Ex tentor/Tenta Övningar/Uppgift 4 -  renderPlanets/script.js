// Uppgift 4

/* Skriv en funktion renderPlanets som tar en array med objekt som argument. 
Funktionen ska skapa en tabell som listar alla planeter givna i arrayen. 
Skapa 3 kolumner där du visar allt i objektet förutom hur många månar planeterna har. 
Tabellen ska renderas i main elementet. */

/* Implement your solution here */

function renderPlanets(array) {
  let createTable = document.createElement("table");
  document.querySelector("main").appendChild(createTable);

  let createThead = document.createElement("thead");
  createTable.appendChild(createThead);

  let createTbody = document.createElement("tbody");
  createTable.appendChild(createTbody);

  let createTr = document.createElement("tr");
  createThead.appendChild(createTr);

  let createThName = document.createElement("th");
  createThName.textContent = "Name";
  createTr.appendChild(createThName);

  let createThMass = document.createElement("th");
  createThMass.textContent = "Mass";
  createTr.appendChild(createThMass);

  let createThPeriod = document.createElement("th");
  createThPeriod.textContent = "Period";
  createTr.appendChild(createThPeriod);

  createTable.style.border = "solid black 1px";

  for (let i = 0; i < array.length; i++) {
    // skapa element för varje loop den gör i arrayen
    const trEl = document.createElement("tr");
    const tdNameEl = document.createElement("td");
    const tdMassEl = document.createElement("td");
    const tdPeriodEl = document.createElement("td");

    //Ger dom ett innehåll

    tdNameEl.textContent = array[i].name;
    tdMassEl.textContent = array[i].mass;
    tdPeriodEl.textContent = array[i].period;

    // Ger dom en plats i Dom

    createTbody.appendChild(trEl);
    trEl.appendChild(tdNameEl);
    trEl.appendChild(tdMassEl);
    trEl.appendChild(tdPeriodEl);
  }
}

/* Do not touch the code below this line */
renderPlanets([
  { name: "Mercury", mass: 0.06, period: 0.24, moons: 0 },
  { name: "Venus", mass: 0.82, period: 0.62, moons: 0 },
  { name: "Earth", mass: 1.0, period: 1.0, moons: 1 },
  { name: "Mars", mass: 0.11, period: 1.88, moons: 2 },
  { name: "Jupiter", mass: 317.8, period: 11.86, moons: 79 },
  { name: "Saturn", mass: 95.2, period: 29.46, moons: 62 },
  { name: "Uranus", mass: 14.6, period: 84.01, moons: 27 },
  { name: "Neptune", mass: 17.2, period: 164.8, moons: 14 }
]);
