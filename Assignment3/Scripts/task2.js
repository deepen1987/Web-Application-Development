const inputField = document.getElementById("input_box");
inputField.addEventListener("blur", verifyInput);

function numberFactorial(fact) {
  if (fact == 0) {
    return 1;
  }
  return fact * numberFactorial(fact - 1); //Use of recursive function
}

function verifyInput(event) {
  let inputText = document.getElementById("input_box").value;
  event.target.style.borderColor = "";
  try {
    if (inputText.length < 1) throw "Undefined Value";
    if (isNaN(inputText)) throw "Please enter a number";
    if (inputText < 0) throw "Please enter a positive number";
    document.getElementById("result").placeholder = numberFactorial(inputText);
  } catch (err) {
    event.target.style.borderColor = "red";
    event.target.value = "";
    event.target.placeholder = err;
    document.getElementById("result").placeholder = "Result";
    console.log(err);
  }
}
