const init = function () {
  document.getElementById("btn1").addEventListener("click", send);
  document.getElementById("cancel").addEventListener("click", reset);
};

const send = function (ev) {
  ev.preventDefault();

  let val = validate();

  if (val) {
    document.getElementById("myform").submit();
  } else {
    // let err = document.querySelector(".error");
    let input = document.querySelector("input");
    input.setAttribute("data-errormsg", `Value not added `);
  }
};

const reset = function (ev) {
  ev.preventDefault();
  document.getElementById("myform").reset();
};

const validate = function () {
  let chk = document.getElementById("email").value;
  if (chk === "") {
    document
      .getElementById("email")
      .setAttribute("placeholder", `Value not added `);
  }
};

document.addEventListener("DOMContentLoaded", init);
