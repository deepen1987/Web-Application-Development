document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM Loaded");
  let a = document.getElementsByTagName("td");
  let c = [];
  console.log(a.length);
  for (let i = 0; i < a.length; i += 2) {
    let b = [];
    console.log(i);
    for (let j = i; j <= i + 1; j++) {
      b.push(a[j]);
    }
    c.push(b);
  }
  console.log(c);
  document.getElementById("btn1").addEventListener("click", () => {
    let row = prompt("Please enter a row between 0 - 2");
    let col = prompt("Please enter a col between 0 - 1");
    let str = prompt("Please enter a replacement string");

    document.set;
    c[row][col].innerHTML = str;
  });
});
