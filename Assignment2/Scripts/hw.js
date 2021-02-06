/* CS601 - A1 
    Deependrasingh Shekhawat 
    JavaScript HW-2*/

function isBetween() {
  var num1 = document.getElementById("us1").value;
  if ((num1 < 18 || num1 > 24) && num1 != -1) {
    alert("Your entered number " + num1 + " is not between 18 and 24");
  } else if (num1 == -1) {
    alert("Congratulations you won a lottery!!!");
  } else if (num1 >= 18 && num1 <= 24) {
    alert("Your entered number " + num1 + " is between 18 and 24");
  } else {
    alert("Please enter a valid value...");
  }
}

function random() {
  //math.random generates a number between 0 - 1 and mat.floor generates a largest integer less than or equal to specified number
  var num2 = Math.floor(Math.random() * 10000);
  document.getElementById("random").textContent = num2;
}
