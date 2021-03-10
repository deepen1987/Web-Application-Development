$(document).ready(function () {
  let a = $(".div");
  let date = new Date();

  for (const iterator of a) {
    $(iterator)
      .on("click", function () {
        $("#messages").text(
          date.toLocaleString() + " " + $(iterator).attr("title")
        );
      })
      .mouseover(function () {
        $("#messages").text($(iterator).attr("aria-placeholder"));
      });
  }
});
