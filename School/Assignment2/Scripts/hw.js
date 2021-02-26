/* CS601 - A1 
    Deependrasingh Shekhawat 
    JavaScript HW-2*/

function isBetween() {
  var num1 = document.getElementById("num").value;
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

function randomGen() {
  //math.random generates a number between 0 - 1 and mat.floor generates a largest integer less than or equal to specified number
  var random_gen = Math.floor(Math.random() * 10000);
  document.getElementById("random").textContent = random_gen;
}

function guessRandom() {
  var random_number = Math.floor(Math.random() * 10);
  var user_num = document.getElementById("guess_num").value;
  if (sessionStorage.clickcount) {
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
  } else {
    sessionStorage.clickcount = 0;
  }
  if (sessionStorage.clickcount < 3) {
    if (user_num == random_number) {
      //   document.getElementById("debug").textContent = sessionStorage.clickcount; Used them for debugging
      alert("Congratulations your guess is correct");
    } else if (user_num != random_number) {
      //   document.getElementById("debug").textContent = sessionStorage.clickcount; Used them for debugging
      alert(
        "You have guessed incorrect number correct number is " + random_number
      );
    }
  } else {
    alert("Maximum 3 guess per session");
  }
}

function ageVerify() {
  var today = new Date();
  var today_dd = today.getDate();
  var today_mm = today.getMonth() + 1;
  var today_yyyy = today.getFullYear();

  var birth_date = document.getElementById("birth_date").value;
  const x = birth_date.split("-");
  var birth_year = Number(x[0]);
  var birth_month = Number(x[1]);
  var birth_day = Number(x[2]);

  var age = today_yyyy - birth_year;
  var months = today_mm - birth_month;

  if (months < 0 || (months == 0 && today_dd < birth_day)) {
    age--;
  }

  if (age == 21 && today_dd == birth_day && months == 0) {
    alert("Happy Birthday! You are 21 now...");
  } else if (age == 20 && months == 0 && today_dd < birth_day) {
    alert("Your 21st birthday is only few days away");
  } else if (age == 20 && months < 0) {
    alert("Your 21st birthday is only few months away");
  } else if (age == 20) {
    alert("Your 21st birthday is coming up next year");
  } else if (age >= 21) {
    alert("You are over 21.");
  } else {
    alert("You are not 21 yet");
  }
}
