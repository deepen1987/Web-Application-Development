$(document).ready(function () {
  $(".btn").click(function (e) {
    if (
      $(".name").val().length > 0 &&
      $(".email").val().length > 0 &&
      $(".subject").val().length > 0 &&
      $(".text-area").val().length > 0
    ) {
      $(".btn").attr("type", "submit");
    }
  });
});
