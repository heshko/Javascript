document.getElementsByTagName("h1")[0].textContent = "Fruits & Vegetables Corp";


function changeHref(){
  const linkEl = document.querySelector("a[href='#bananas']");
  linkEl.textContent = "Vegetables";
  linkEl.href= '#Vegetables'
}
  
changeHref();


function swapSection(){
  let aboutEl = document.getElementById("about");
  let mainEl=aboutEl.parentNode;
  mainEl.removeChild(aboutEl);
  let contactEl = document.getElementById("contact");
  mainEl.removeChild(contactEl);
  
  mainEl.appendChild(aboutEl);
  mainEl.appendChild(contactEl);
}

swapSection();


function addH2About(){
  let aboutEl = document.getElementById("about");
  let h2About = document.createElement("H2");
  let aboutText = document.createTextNode("About");
  h2About.appendChild(aboutText);
  aboutEl.prepend(h2About);
}

addH2About();

function addH2Contact(){
  let contactEl = document.getElementById("contact");
  let h2Contact = document.createElement("H2");
  let contactText = document.createTextNode("Contact");
  h2Contact.appendChild(contactText);
  contactEl.prepend(h2Contact);
}

addH2Contact();




let tableTh = document.getElementsByTagName("thead");
let firstTableHead = tableTh[0];
let tr = firstTableHead.getElementsByTagName("tr");
let tr1 = tr[0];
let td = tr1.getElementsByTagName("td");
let nelements = td.length;


for (let i = 0; i < nelements; i++) {
  let tabeldataEl = td[0];
  let text = tabeldataEl.firstChild;
  let tabelheadEl = document.createElement("th");

  tabelheadEl.appendChild(text);
  tr1.removeChild(tabeldataEl);

  tr1.appendChild(tabelheadEl);
  
}

function addCSS(){

  let headEL = document.getElementsByTagName("head");
  let headEL1 = headEL[0];
  let style = document.createElement("link");
  style.href = "main.css";
  style.type = "text/css";
  style.rel = "stylesheet";
  headEL1.append(style);

}

addCSS();