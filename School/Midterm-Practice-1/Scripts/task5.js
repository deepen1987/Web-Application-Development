$(document).ready(function () {
  $("p").click(function () {
    if (
      $(this).hasClass("p1") ||
      $(this).hasClass("p2") ||
      $(this).hasClass("p3") ||
      $(this).hasClass("p4") ||
      $(this).hasClass("p5")
    ) {
      checkClass(this);
    } else {
      null;
    }
  });

  function checkClass(e) {
    if ($(e).hasClass("change")) {
      $(e).removeClass("change");
      return e;
    } else {
      $(e).addClass("change");
      return e;
    }
  }
});
