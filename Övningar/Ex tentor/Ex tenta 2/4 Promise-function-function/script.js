/* # Uppgift 4

I `script.js` ligger det två funktioner: `getData` och `formatData`. Båda funktionerna returnerar en Promise.

Skriv logik som kallar på funktionen `getData`, skickar in datan du får i `formatData` och därefter renderar en ul lista i DOM:en
med namnen som finns i arrayen du får av `formatData` funktionen. Titta på koden för att se strukturen på datan. 
Listan ska renderas i `main` elementet. */


/* Implement your solution here */




function rederList (array) {

  let listItems = document.createElement("ul");
  document.querySelector("main").appendChild(listItems);


  for (let i = 0; i < array.length; i++) {

       // skapa element

       const listNames = document.createElement("li");

       // Ger dom ett innehåll

       listNames.textContent = array[i].name;
   
       // Ger dom en plats i DOM

      listItems.appendChild(listNames);    
  }
}

// doSomething().then(result => doSomethingElse(result))
//.then(finalResult => {console.log(`Got the final result: ${finalResult}`);})


// doSomething är vår getData => skickas in i vår doSomethingElse som är vår formatData returnar resolve. när vi använder .then
// resolve gör om det till string (JSON.stringify) som vi sparar i listName

getData().then(result =>  formatData(result))
.then(function(dataInfo) {                // .then kallar på resolve
  const listNames = JSON.parse(dataInfo);
  rederList(listNames.data);
});


// FUNKAR! 
// getData().then(function (result) {
//   formatData(result).then(function (dataInfo) {
//     let listNames = JSON.parse(dataInfo);
//     renderList(listNames.data);
//   });
// });


/* Do NOT touch this function */
function getData() {
  return new Promise(function(resolve, reject) {
    resolve([
      {name: 'Knatte'},
      {name: 'Fnatte'},
      {name: 'Tjatte'},
    ]);
  });
}

/* Do NOT touch this function */
function formatData(data) {
  return new Promise(function(resolve, reject) {
    resolve(JSON.stringify({data: data.map(x => {
      x.name = x.name.toUpperCase();
      return x;
    })}));
  });
}
