document.addEventListener("DOMContentLoaded", () => {
  let arr = [10, 78, 121, 454, 3, "a", "&67", "18b", "9-", "x008"];

  function createE(ele) {
    return document.createElement(ele);
  }

  document.getElementById("btn").addEventListener("click", () => {
    let div = createE("div");
    div.innerHTML = "Ordered List";
    document.body.appendChild(div);
    let ol = createE("ol");
    div.appendChild(ol);
    arr.forEach((v) => {
      if (!isNaN(v)) {
        if (v > 100) {
          let li = createE("li");
          let liName = document.createTextNode(v);
          li.appendChild(liName);
          ol.appendChild(li);
        }
      }
    });
  });
});
