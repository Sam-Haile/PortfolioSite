// (A) HTML ELEMENTS
let table = document.getElementById("demoTable");

// (B) FUNCTION TO PARSE CSV & GENERATE TABLE
function displayCSV(csvData) {
  table.innerHTML = "";
  for (let row of CSV.parse(csvData)) {
    let tr = table.insertRow();
    for (let col of row) {
      let td = tr.insertCell();
      td.innerHTML = col;
    }
  }
}

// (C) FETCH CSV & DISPLAY
if (typeof csvFilePath !== "undefined") {
  fetch(csvFilePath)
    .then(response => response.text())
    .then(data => displayCSV(data))
    .catch(error => console.error("Error fetching CSV:", error));
}
