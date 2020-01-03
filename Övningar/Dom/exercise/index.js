// The previous developer thought the company is named Fruits & Bananas Corp, but it's actually called Fruits & Vegetables Corp
// Text content in `header h1` is wrong, should be Fruits & Vegetables Corp (see first issue)

const newTitle = document.getElementsByTagName("h1")[0];
newTitle.textContent = "Fruits & Vegetables Corp";

// Fler sätt att skriva det på 
// document.getElementsByTagName("h1")[0].textContent = "Fruits & Vegetables Corp";


// The last `a` tag in `header ul` has wrong text content and href attribute (should be Vegetables and not Bananas)

const linkEl = document.querySelector("a[href='#bananas']");
linkEl.textContent = "Vegetables";
linkEl.href ="#Vegetables";

// The section #contact and #about are in the wrong order. Swap them.

document.getElementById("main").style.cssText = "display: flex; flex-direction: column-reverse";

// Each `section` should have a `h2` tag at the top with corresponding text according to its id

const aboutH2 = document.createElement("h2");
aboutH2.textContent = "About";
const aboutEl = document.getElementById("about")
aboutEl.prepend(aboutH2);

const contactH2 = document.createElement("h2");
contactH2.textContent = "Contact";
const contactEl = document.getElementById("contact");
contactEl.prepend(contactH2);

// The text "We're the best in fruits & vegetables" under #about should be wrapped in a `p` tag

let paragraph = document.createElement("p");
paragraph.textContent = "We're the best in fruits & vegetables";
aboutEl.appendChild(paragraph);

aboutEl.removeChild(aboutEl.childNodes[1]);

// annat sätt att skriva det 
// aboutEl.childNodes[1].remove();

// The developer used `td` elements in `thead` instead of `th`. Fix it.


const tdName = document.getElementsByTagName("td")[0];
let thName = document.createElement("th");
thName.textContent = "Name";
tdName.replaceWith(thName);

// annat sätt att skriva detta 

// let createNewTheadName = document.createElement("th");
// createNewTheadName.textContent = "Name";
// document.querySelector("thead > tr").replaceChild(createNewTheadName, document.querySelector("thead > tr > td") );



const tdEmail = document.getElementsByTagName("td")[0];
let thEmail = document.createElement("th");
thEmail.textContent = "Email";
tdEmail.replaceWith(thEmail);

// annat sätt att skriva detta 

// let creatNewTheadEmail = document.createElement("th");
// creatNewTheadEmail.textContent = "E-mail";
// document.querySelector("thead > tr > td").replaceWith(creatNewTheadEmail);


// The developer forgot to include the `main.css` file. Add it to `head`.

let cssLink = document.createElement("link");
cssLink.href = "main.css";
cssLink.type = "text/css";
cssLink.rel = "stylesheet";
document.head.append(cssLink);

//Head title is wrong

document.title = "Fruits & Vegetables Corp";
