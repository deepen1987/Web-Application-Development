$(document).ready(() => {
  let hrs = $("#hrs").select();
  let min = $("#min").select();
  let sec = $("#sec").select();
  let h = 0;
  let m = 0;
  let s = 0;
  let t;

  function setTime() {
    s += 1;
    sec.html(s);
    if (s === 60) {
      s = 0;
      sec.html(s);
      m += 1;
      min.html(m);
      if (m === 60) {
        h += 1;
        hrs.html(h);
      }
    }
  }

  $("#start").on("click", () => {
    h = 0;
    m = 0;
    s = 0;
    $("#stop").removeAttr("disabled");
    $("#start").attr("disabled", "true");
    t = setInterval(setTime, 1000);

    hrs.html(h);
    min.html(m);
    sec.html(s);
  });

  $("#stop").on("click", () => {
    clearInterval(t);
    $("#start").removeAttr("disabled");
    $("#stop").attr("disabled", "true");
  });
});
