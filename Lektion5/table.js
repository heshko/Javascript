let tableData = [
  {name: 'Simba', animal: 'Lion'},
  {name: 'Timon', animal: 'Meerkat'},
  {name: 'Pumba', animal: 'Warthog'}
];

const tableEl = document.querySelector("#table");
const searchEl = document.querySelector("#search");

function renderTableHead(data) {
  const rv = document.createElement("thead");
  const keys = Object.keys(data[0]);

  const row = document.createElement("tr");
  rv.appendChild(row);

  keys.forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key;
    row.appendChild(th);
  });

  return rv;
}

function renderTableBody(data) {
  const rv = document.createElement("tbody");

  data.forEach((item) => {
    const row = document.createElement("tr");
    rv.appendChild(row);

    Object.keys(item).forEach((key) => {
      const td = document.createElement("td");
      td.textContent = item[key];

      row.appendChild(td);
    });
  });

  return rv;
}

function render() {
  tableEl.innerHTML = "";

  const q = searchEl.value.toLowerCase();
  const data = tableData.filter(item => {
    return item.name.toLowerCase().includes(q) || item.animal.toLowerCase().includes(q);
  });

  if (data.length === 0) {
    return;
  }

  const thead = renderTableHead(data);
  const tbody = renderTableBody(data);

  tableEl.appendChild(thead);
  tableEl.appendChild(tbody);
}

searchEl.addEventListener("input", render);

render();