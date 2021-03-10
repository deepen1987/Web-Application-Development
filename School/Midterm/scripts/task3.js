document.addEventListener("DOMContentLoaded", (event) => {
  let todayDate = new Date();
  let endDate = new Date("2021-12-19");
  let days = Math.round((endDate.getTime() - todayDate.getTime()) / 86400000);

  document.getElementById(
    "message"
  ).innerHTML = `Unfortunately, the number of days left in my amazing semester at Boston University is ${days}`;
});
