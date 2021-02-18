// window.addEventListener("DOMContentLoaded", () => {
//   const a = document.querySelectorAll("p");
//   a.forEach((child) => {
//     child.addEventListener("click", () => {
//       child.style.color = "yellow";
//     });
//   });
// });

$(document).ready(function () {
  $("#bt3").on("click", () => {
    $("#p2")
      .html("<b>The paragraph has<i> been</i> changed</b>")
      .attr("class", "gold");
    $("#d").after("<div><p>This is a paragraph in a new div.</p></div>");
  });

  let a = $("#p1").on("click", () => {
    a.fadeToggle(2000);
  });

  let b = $("#p2");
  b.hover(
    function () {
      b.css("background-color", "red");
    },
    function () {
      b.css("background-color", "blue");
    }
  );

  $("#bt2").hide();

  // on event take 4 arguments --> event, selector, data to be passed and function
  $("#bt1").on("click", function (e) {
    $("#p2").hide();
    $("#bt1").hide();
    $("#bt2").show();
  });
  $("#bt2").on("click", function (e) {
    $("#p2").show().fadeOut(2000).fadeIn(2000); //method chaining
    $("#bt2").hide();
    $("#bt1").show();
  });

  // animate 1st argument is CSS and duration and callback function
  $("#bt3").click(function () {
    $("#cube").animate(
      {
        left: "150px",
        width: "150px",
        height: "150px",
      },
      2000,
      function () {
        // example of call back function
        alert("alert");
      }
    );
  });
});

// DOM Manipulation with jQuery
