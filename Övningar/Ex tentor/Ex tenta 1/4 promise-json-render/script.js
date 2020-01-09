/* Implement your solution here */




getData().then(function(dataInfo) {                // .then kallar på resolve
  const listNames = JSON.parse(dataInfo);
  rederList(listNames.data);
});

function rederList(array) {

  let listItem = document.createElement("ul");
  document.querySelector("main").appendChild(listItem);

  for (let i = 0; i < array.length; i++) {
    
    // skapa element

    const listName = document.createElement("li");

    // Ger dom ett innehåll

    listName.textContent = array[i].name;

    // Ger dom en plats i DOM

    listItem.appendChild(listName);
  }
}

/* Do NOT touch this function */
function getData() {
  return new Promise(function(resolve, reject) {
    resolve(
      JSON.stringify({
        data: [{ name: "Knatte" }, { name: "Fnatte" }, { name: "Tjatte" }]
      })
    );
  });
}
