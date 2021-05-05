import { jsonV } from "./module.js";

document.addEventListener("DOMContentLoaded", () => {
  function createE(ele) {
    return document.createElement(ele);
  }
  let div = createE("div");
  div.innerHTML = "Json List";
  document.body.appendChild(div);
  let ul = createE("ul");
  div.appendChild(ul);

  function iter(js) {
    for (let key in js) {
      if (typeof js[key] == "object") {
        let ul1 = createE("ul");
        ul.appendChild(ul1);
        iter(js[key]);
      } else {
        let li = createE("li");
        let liName = document.createTextNode(js[key]);
        li.appendChild(liName);
        ul.appendChild(li);
        console.log("t");
      }
    }
  }
  document.getElementById("btn").addEventListener("click", () => {
    iter(jsonV);
  });
});
