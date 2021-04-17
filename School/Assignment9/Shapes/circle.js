document.addEventListener("DOMContentLoaded", () => {
  let button = $("#btn");

  $(button).click(() => {
    let url = `http://zumatra.com/teach/colors.php`;

    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        addCSS(data);
      });
  });

  function addCSS(data) {
    $("#circle").css({
      width: "40px",
      height: "40px",
      border: `1px solid ${data[0]}`,
      "border-radius": "100%",
      "background-color": `${data[0]}`,
    });

    $("#square").css({
      width: "40px",
      height: "40px",
      border: `1px solid ${data[1]}`,
      "background-color": `${data[1]}`,
    });

    $("#triangle").css({
      width: "0",
      height: "0",
      "border-left": "21px solid transparent",
      "border-right": "21px solid transparent",
      "border-bottom": `21px solid ${data[2]}`,
    });
  }
});
