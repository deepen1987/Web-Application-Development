$(document).ready(function () {
  let l = console.log;
  let amount = document.getElementById("amount");
  let service = document.getElementById("service");
  let pCount = document.getElementById("pCount");
  amount.value = 1;
  pCount.value = 1;

  amount.addEventListener("blur", () => {
    let a = amount.value;
    if (isNaN(a) || a.trim() === "" || a < 0) {
      amount.value = 1;
    }
  });

  pCount.addEventListener("blur", () => {
    let p = pCount.value;
    if (isNaN(p) || p.trim() === "" || p < 0) {
      pCount.value = isFloat(p);
    }
  });

  $(".btn").on("click", () => {
    let servicePercent = [0.3, 0.2, 0.15, 0.1, 0.05];
    let tipPerPerson = `Tip Per Person is $${
      (amount.value * servicePercent[service.selectedIndex]) / pCount.value
    }.`;

    $("#tip").html(tipPerPerson);
  });

  function isFloat(n) {
    return Math.floor(n);
  }
});
