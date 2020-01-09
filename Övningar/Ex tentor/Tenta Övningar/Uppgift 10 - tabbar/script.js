/* I index.html ligger det en struktur för att skapa tabbar. Lägg på JS som döljer alla tabs-single-content divar som inte ska visas. 
Varje .tabs-selector är matchad med en .tabs-single-content med hjälp av data-tab och data-tabid. 
När vi trycker på en .tabs-selector ska dessa matchande .tabs-single-content visas. .tabs-selectorn ska också få classen 
.selected och vara ensam om att ha den. */


hideContent(); // gå in i metoden och kör den

const tabs = document.querySelectorAll("[data-tab]");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", onClick);
}

/*document.querySelector("[data-tab='info']").addEventListener("click", onClick);

document.querySelector("[data-tab='about']").addEventListener("click", onClick);

document.querySelector("[data-tab='contact']").addEventListener("click", onClick);*/


function hideContent() {      // Display none på alla .tabs-single-content

  const tabSingels = document.querySelectorAll(".tabs-single-content");

  for (let i = 0; i < tabSingels.length; i++) {
    tabSingels[i].style.display = "none";
  }
}

function hideSelected() { // ta bort selected på alla tabs (selected i css (grönfärg))

  const allTabSelected = document.querySelectorAll(".tabs-selector");

  for (let i = 0; i < allTabSelected.length; i++) {
    allTabSelected[i].classList.remove("selected");
  }
}

function onClick() { // onclick kör koden

  hideContent(); // Display none på alla .tabs-single-content
  hideSelected(); // ta bort selected på alla tabs (selected i css (grönfärg))

  const tabsSelector = document.querySelector(`[data-tab='${this.dataset.tab}']`);
  const tabsContent = document.querySelector("[data-tabid='" + this.dataset.tab + "']");
  console.log(this.dataset.tab);

  tabsContent.style.display = "block";

  tabsSelector.classList.add("selected");

}







