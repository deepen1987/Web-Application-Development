$(document).ready(function () {
  function sleep() {
    for (let index = 0; index < 10; index++) {
      $(".content").text(index);
    }
  }
  sleep();
});
