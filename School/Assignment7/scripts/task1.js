import * as task1 from "./task1Module.js";

document.addEventListener("DOMContentLoaded", () => {
  let inStr = document.getElementById("input");

  task1.add.addEventListener("click", () => {
    if (inStr.value) {
      task1.inArray.push(inStr.value);
    }
    inStr.value = "";
  });

  task1.display.addEventListener("click", () => {
    task1.show();
  });

  task1.clear.addEventListener("click", (e) => {
    task1.clearArray();
  });

  document.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "img") {
      let imgClass = e.target.className;
      let imgId = e.target.id;
      if (imgId.includes("edit")) {
        document
          .getElementById(imgClass)
          .setAttribute("contenteditable", "true");
        document.getElementById(imgClass).addEventListener("blur", () => {
          let newData = document.getElementById(imgClass).innerHTML;
          document.getElementById(imgClass).removeAttribute("contenteditable");
          task1.editArray(imgClass, newData);
        });
      }
      if (imgId.includes("delete")) {
        task1.delArrayElement(imgClass);
      }
    }
  });
});
