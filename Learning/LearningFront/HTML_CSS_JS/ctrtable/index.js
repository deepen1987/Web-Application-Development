document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM Loaded");

  function createTable() {
    let tab = document.createElement("table");
    return tab;
  }

  function createRow(row) {
    let elementRow = [];
    for (let i = 0; i < row; i++) {
      elementRow[i] = document.createElement("tr");
    }
    return elementRow;
  }

  function createCols(ind, cols) {
    let elementCols = [];
    for (let i = 0; i < cols; i++) {
      let str = "Row" + ind + " " + "Col" + i;
      elementCols[i] = document.createElement("td");
      elementCols[i].innerHTML = str;
      elementCols[i].setAttribute("class", "cols");
    }
    return elementCols;
  }
  document.getElementById("btn1").addEventListener("click", () => {
    let row = prompt("Enter no. of rows in table: ");
    let col = prompt("Enter no. of columns in table: ");
    let tab = createTable();
    let rows = createRow(row);

    // for (const itrRow of createRow(row)) {
    //   tab.appendChild(itrRow);
    //   for (const itrCol of createCols(col)) {
    //     itrRow.appendChild(itrCol);
    //   }
    // }

    for (let i = 0; i < row; i++) {
      tab.appendChild(rows[i]);
      for (let j = 0; j < col; j++) {
        let cols = createCols(i, col);
        rows[i].appendChild(cols[j]);
      }
    }
    tab.setAttribute("class", "table");
    document.getElementById("myTable").insertAdjacentElement("afterend", tab);
    console.log(tab);
  });
});
