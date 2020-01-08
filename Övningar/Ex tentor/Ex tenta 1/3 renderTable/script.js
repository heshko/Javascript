/* Implement your solution here */

function renderTable(array) {
  let createTable = document.createElement("table"); // Ska en table
  document.querySelector("main").appendChild(createTable); // lägg in table i main

  let createThead = document.createElement("thead"); // skapa en thead
  createTable.appendChild(createThead); // lägg den i table

  let createTbody = document.createElement("tbody"); // skapa en tbody
  createTable.appendChild(createTbody);               // lägg in den i table samma höjd som thead

  let createTr = document.createElement("tr"); // skapa en tr
  createThead.appendChild(createTr); // lägg deb i thead

  let createThName = document.createElement("th");
  createThName.textContent = "Name";
  createTr.appendChild(createThName);

  let createThOccupation = document.createElement("th");
  createThOccupation.textContent = "Occupation";
  createTr.appendChild(createThOccupation);

  let createThAge = document.createElement("th");
  createThAge.textContent = "Age";
  createTr.appendChild(createThAge);

  createTable.style.border = "solid black 1px";

  for (let i = 0; i < array.length; i++) {

    //skapa element

    const trEl = document.createElement("tr");
    const tdNameEl = document.createElement("td");
    const tdOccupationEl = document.createElement("td");
    const tdAgeEl = document.createElement("td");

    //Ger dom ett innehåll

    tdNameEl.textContent = array[i].name;
    tdOccupationEl.textContent = array[i].occupation;
    tdAgeEl.textContent = array[i].age;


    // Ger dom en plats i Dom

    createTbody.appendChild(trEl);
    trEl.appendChild(tdNameEl);
    trEl.appendChild(tdOccupationEl);
    trEl.appendChild(tdAgeEl);
  }
}


/* Do not touch anything below this line */
let data = [
  { name: "Rachel Green", occupation: "Waitress", age: 24 },
  { name: "Monica Geller", occupation: "Chef", age: 24 },
  { name: "Phoebe Buffay", occupation: "Massage therapist", age: 27 },
  { name: "Joey Tribbiani", occupation: "Actor", age: 25 },
  { name: "Chandler Bing", occupation: "Transponster?", age: 26 },
  { name: "Ross Geller", occupation: "Paleontologist", age: 26 }
];
renderTable(data);


