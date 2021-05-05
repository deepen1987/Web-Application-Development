import * as module1 from "./module.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", () => {
    let test = module1.getFullName();
    document.getElementById(
      "show"
    ).innerHTML = `${test} ${module1.MAX_FULL_NAME_LENGTH}`;
  });
});
