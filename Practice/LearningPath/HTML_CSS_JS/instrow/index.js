let no = 1;

function insert_Row() {
  let a = document.getElementsByTagName("tr");
  console.log(a);
  for (i = 0; i < a.length; i++) {
    const b = document.createElement("td");
    const c = document.createTextNode("Row" + no);
    a[i].insertAdjacentElement("beforeend", b).appendChild(c);
  }
  no++;
}
