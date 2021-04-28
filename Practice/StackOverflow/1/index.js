$(document).ready(function () {
  $(".collapse").on("click", function () {
    //console.log($(this).attr('data-depth'));
    var findChildren = function (tr) {
      var depth = tr.data("depth");
      return tr.nextUntil(
        $("tr").filter(function () {
          return $(this).data("depth") <= depth;
        })
      );
    };

    var children = findChildren($(this));
    if ($(children).is(":visible")) {
      $(this).addClass("closed");
      $(children).hide();
    } else {
      $(this).removeClass("closed");
      $(children).show();
      var children = findChildren($(".closed"));
      $(children).hide();
    }
  });

  $("#show_all").on("click", function () {
    $("#mytable tr.collapse").removeClass("closed").show();
  });
  $("#hide_all").on("click", function () {
    $("#mytable tr.collapse:not([data-depth='0'])").hide();
    let a = document.querySelectorAll("#mytable tr.collapse.level0");
    for (const iterator of a) {
      if (iterator.nextSibling.nextSibling.className.includes("level1")) {
        $(iterator).addClass("closed");
      }
    }
  });
});
