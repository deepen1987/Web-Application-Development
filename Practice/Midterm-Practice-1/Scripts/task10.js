$(document).ready(function () {
  $("input[type = date]").change(function (e) {
    let departDate = $("#depart").val();
    let returnDate = $("#return").val();
    let dD = new Date(departDate);
    let rD = new Date(returnDate);
    if (departDate && returnDate) {
      if (departDate > returnDate) {
        $("#message").text("It appears Your date are inverted");
      }
      if ((rD.getTime() - dD.getTime()) / 86400000 > 30) {
        $("#message").text(
          "You have a 30+ day duration. Please make sure your dates are correct."
        );
      }
      if ((rD.getTime() - dD.getTime()) / 86400000 === 0) {
        $("#message").text(
          "It appears you are coming back on the same day as your departure. Please make sure this is correct."
        );
      }

      if ((rD.getTime() - dD.getTime()) / 86400000 > 365) {
        $("#message").text(
          "It appears your travel is greater then 1 year. Please make sure this is correct."
        );
      }
      console.log();
    }
  });
});
