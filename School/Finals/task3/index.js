document.addEventListener("DOMContentLoaded", () => {
  $(".box input:checkbox").click(function () {
    $(".box input:checkbox").not(this).prop("checked", false);
  });
  let btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    let submitF = false;
    let form = document.querySelector("form");
    let checkI = document.querySelectorAll('input[type="checkbox"]');
    let text = document.getElementById("text").value;
    for (const iterator of checkI) {
      if (iterator.getAttributeNames().includes("checked")) {
        submitF = true;
      }
    }
    if (text.length > 10) {
      submitF = true;
    } else {
      submitF = false;
    }

    if (submitF === true) {
      form.submit();
    }
  });
});
