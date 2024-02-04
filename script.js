const vitals_y = [
  1450.64, 16946.9, 8094.39, 2038.89, 7524.58, 18322.7, 1623.27, 13906.9,
  19645.4, 15339.4, 4737.25, 14805.3, 10984.5, 11937.1, 12333.7, 5818.16,
  12585.6, 19661.05, 17652.9, 8255.86,
];

const loadButton = document.querySelector("#load");
const checkbox = document.querySelector("#tnc");

checkbox &&
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      loadButton.disabled = false;
    }
  });

loadButton &&
  loadButton.addEventListener("click", async () => {
    let resp = await fetch("http://localhost:3000/ecg");
    console.log(resp);
    resp = await fetch("http://localhost:3000/vitals");
    console.log(resp);
    location.replace("tracking.html");
  });

const table = document.querySelector("#results");
if (table) {
  vitals_y.map((v, i) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = "Day " + (i + 1);
    const td2 = document.createElement("td");
    td2.textContent = v;
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
  });
}
