// Om allt gick som det skulle ska ni ha fått meddelandet: "Server started, visit http://localhost:8091”

// npm install 
// npm start



function fetch() {

  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "/todos");
  oReq.send();

}

fetch();

function reqListener() {
  const tasks = JSON.parse(this.responseText);
  renderTaskes(tasks.data);
}

function renderTaskes(ar) {

  for (let i = 0; i < ar.length; i++) {
    const newTask = document.createElement("li");
    newTask.textContent = ar[i].title;
    document.getElementById("toDo-list").appendChild(newTask);
  }
}

const formEL = document.querySelector("form");

formEL.addEventListener("submit", onSubmit);

function onToDoAdded(e) {
  const ob = JSON.parse(this.responseText);
  renderTaskes([ob]);
}

function onSubmit(e) {
  e.preventDefault();

  const postReq = new XMLHttpRequest();

  postReq.open("POST", "/todos");
  postReq.setRequestHeader("Content-Type", "application/json");

  const titleEl = document.getElementById("toDo");

  const ob = { title: titleEl.value };

  console.log(ob);

  postReq.addEventListener("load", onToDoAdded);

  postReq.send(JSON.stringify(ob));

  titleEl.value = "";
}