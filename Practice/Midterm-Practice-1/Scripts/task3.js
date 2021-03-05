$(document).ready(function () {
  let a = $(".div");
  let date = new Date();

  for (const iterator of a) {
    $(iterator).mousedown(function () {
      console.log(date.toLocaleString(), $(iterator).attr("id"));
    });
    $(iterator).mouseover(function () {
      $("#messages").text($(iterator).attr("title"));
    });
  }
});
