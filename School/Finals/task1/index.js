document.addEventListener("DOMContentLoaded", () => {
  let arr = new Array();
  arr.push(1);
  arr.push(2);
  document.getElementById("array1").innerHTML = `Array1 = ${arr}`;
  arr.pop();
  document.getElementById("array").innerHTML = `Array = ${arr}`;

  let maps = new Map();
  maps.set("name", "Deep");
  maps.set("age", 33);
  document.getElementById("maps1").innerHTML = `Maps1 = ${maps.get(
    "name"
  )} ${maps.get("age")}`;
  maps.delete("age");
  document.getElementById("maps").innerHTML = `Maps = ${maps.get("name")}`;

  let sets = new Set();
  sets.add(23);
  sets.add(43);
  let item1 = "";
  for (const iterator of sets.values()) {
    item1 += iterator + " ";
  }
  document.getElementById("sets1").innerHTML = `Sets1 = ${item1}`;

  sets.delete(23);
  let item = "";
  for (const iterator of sets.values()) {
    item += iterator;
  }
  document.getElementById("sets").innerHTML = `Sets = ${item}`;
});
