const inputField = document.getElementById("input_box");
inputField.addEventListener("blur", verifyInput);

function numberFactorial(fact) {
  let num = 1;
  while (fact > 0) {
    num = num * fact;
    fact--;
  }
  return num;
}

function verifyInput(event) {
  try {
    let inputText = document.getElementById("input_box").value;
    if(inputText.length < 1) throw "Undefined Value"
    if (isNaN(inputText)) throw "Please enter a number";
    if (inputText < 0) throw "Please enter a positive number";
    event.target.style.borderColor = "";
    document.getElementById("result").placeholder = numberFactorial(inputText);
  } catch (err) {
    event.target.style.borderColor = "red";
    event.target.value = "";
    event.target.placeholder = err;
    document.getElementById("result").placeholder = "Result";
    console.log(err);
  }
}
