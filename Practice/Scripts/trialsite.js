function user_pass() {
  var a = document.getElementById("username").value;
  var b = document.getElementById("password").value;

  if (a == b) {
    alert("You are being logged in username and password match");
  } else {
    alert("Please enter correct username and password.");
  }
}
