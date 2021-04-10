document.addEventListener("DOMContentLoaded", () => {
  let creditScore = document.getElementById("credit-score");
  let score = document.getElementById("score");
  let result = document.getElementById("result");

  score.innerHTML = creditScore.value;

  creditScore.oninput = function () {
    score.innerHTML = this.value;
    verify()
      .then((msg) => {
        console.log(msg);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  function verify() {
    return new Promise((resolve, reject) => {
      if (creditScore.value > 750) {
        resolve("Your application is Approved");
      } else if (creditScore.value < 749) {
        reject(new Error("Your application is Rejected "));
      }
    });
  }
});
