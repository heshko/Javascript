// Uppgift 3

// Skriv en funktion renderOrderedList som tar en array som argument. 
// Arrayen innehåller strängar. Du ska rendera alla värden i en ordnad lista under main elementet i index.html.

/* Implement your solution here */


function renderOrderedList (array){ // anropar renderOrderedList som är en array

  let orderList = document.createElement("ol"); 
  document.querySelector("main").appendChild(orderList); 

for (let i = 0; i < array.length; i++) {

  // skapa element
  
  const listTitle = document.createElement("li");

  // Ger dom ett innehåll
  
  listTitle.textContent = array[i];

  // Ger dom en plats i DOM

  orderList.appendChild(listTitle);


}

}


/* Do not touch the code below */
renderOrderedList(["Alpha", "Beta", "Gamma", "Delta", "Epsilon"]);
