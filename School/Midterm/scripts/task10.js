document.addEventListener("DOMContentLoaded", (event) => {
  let red = document.getElementById("red");
  let green = document.getElementById("green");
  let blue = document.getElementById("blue");

  for (let i = 0; i < 256; i++) {
    let opt1 = document.createElement("option");
    let opt2 = document.createElement("option");
    let opt3 = document.createElement("option");

    opt1.value = i;
    opt1.text = i;

    opt2.value = i;
    opt2.text = i;

    opt3.value = i;
    opt3.text = i;

    red.add(opt1);
    green.add(opt2);
    blue.add(opt3);
  }

  document.getElementById("btn1").addEventListener("click", () => {
    let r = red.value;
    let g = green.value;
    let b = blue.value;

    // let cir = document.getElementsByClassName("circle");
    // cir.setAttribute("background-color", "rgb(${r}, ${g}, ${b})");

    $(".circle").css("background-color", "rgb(" + r + "," + g + "," + b + ")");

    console.log(r, g, b);
  });

  document.getElementById("btn2").addEventListener("click", () => {
    let r = (red.value = "");
    let g = (green.value = "");
    let b = (blue.value = "");

    // let cir = document.getElementsByClassName("circle");
    // cir.setAttribute("background-color", "rgb(${r}, ${g}, ${b})");

    $(".circle").css("background-color", "rgb(255,255,255)");

    console.log(r, g, b);
  });
});
