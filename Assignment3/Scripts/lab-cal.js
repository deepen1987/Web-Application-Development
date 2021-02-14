window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("add").addEventListener("click", () => {
    let firstNum = Number(document.getElementById("inputbox1").value);
    let secondNum = Number(document.getElementById("inputbox2").value);
    let result = firstNum + secondNum;
    document.getElementById("result").innerHTML = "Result is " + result;
  });
  document.getElementById("sub").addEventListener("click", () => {
    let firstNum = Number(document.getElementById("inputbox1").value);
    let secondNum = Number(document.getElementById("inputbox2").value);
    let result = firstNum - secondNum;
    document.getElementById("result").innerHTML = "Result is " + result;
  });
  document.getElementById("mul").addEventListener("click", () => {
    let firstNum = Number(document.getElementById("inputbox1").value);
    let secondNum = Number(document.getElementById("inputbox2").value);
    let result = firstNum * secondNum;
    document.getElementById("result").innerHTML = "Result is " + result;
  });
  document.getElementById("div").addEventListener("click", () => {
    let firstNum = Number(document.getElementById("inputbox1").value);
    let secondNum = Number(document.getElementById("inputbox2").value);
    let result = firstNum / secondNum;
    console.log(result);
    document.getElementById("result").innerHTML = "Result is " + result;
  });
});
