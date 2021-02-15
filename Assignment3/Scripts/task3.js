// CS601 - A1
//     Deependrasingh Shekhawat
//     The Copyright Date

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit").addEventListener("click", () => {
    let lastName = document.getElementById("last_name").value;
    lastName = lastName.toLowerCase().trim();
    let capitalize = lastName.slice(0, 1);
    lastName = lastName.replace(capitalize, capitalize.toUpperCase());
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById("result").innerHTML =
      year + "©" + lastName + ". All rights reserved.";
  });
});
