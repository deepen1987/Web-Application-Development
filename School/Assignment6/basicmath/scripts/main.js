import {
  addBtn,
  subBtn,
  mulBtn,
  divBtn,
  modBtn,
  addTile1,
  subTile1,
  mulTile1,
  divTile1,
  modTile1,
} from "../modules/basicmath.js";

const addNumber = document.getElementById("addTileNumber");
const subNumber = document.getElementById("subTileNumber");
const mulNumber = document.getElementById("mulTileNumber");
const divNumber = document.getElementById("divTileNumber");
const modNumber = document.getElementById("modTileNumber");

addBtn.addEventListener("click", (event) => {
  const first_num = Math.floor((Math.random() * 100) / 2);
  const second_num = Math.floor((Math.random() * 100) / 2);

  subNumber.classList.add("hide");
  mulNumber.classList.add("hide");
  divNumber.classList.add("hide");
  modNumber.classList.add("hide");
  addNumber.classList.remove("hide");

  addNumber.innerHTML = `${first_num + "+" + second_num + "="}
 <!-- See http://www.menucool.com/tooltip/css-tooltip -->
<div
  id="addition_tile"
  answer=${first_num + second_num}
  style="border-bottom: 0"
  class="btn btn-primary tooltip"
>
  ?
  <div class="top">
    <h3 id="addTileAnswer">Click to see the answer!</h3>
    <i></i>
  </div>
</div>`;
  addTile1();
  document.getElementById("addition_section").style.display = "block";
});

subBtn.addEventListener("click", (event) => {
  const first_num = Math.floor((Math.random() * 100) / 2);
  const second_num = Math.floor((Math.random() * 100) / 2);

  addNumber.classList.add("hide");
  mulNumber.classList.add("hide");
  divNumber.classList.add("hide");
  modNumber.classList.add("hide");
  subNumber.classList.remove("hide");

  subNumber.innerHTML = `${first_num + "-" + second_num + "="}
 <!-- See http://www.menucool.com/tooltip/css-tooltip -->
<div
  id="sub_tile"
  answer=${first_num - second_num}
  style="border-bottom: 0"
  class="btn btn-primary tooltip"
>
  ?
  <div class="top">
    <h3 id="subTileAnswer">Click to see the answer!</h3>
    <i></i>
  </div>
</div>`;
  subTile1();
  document.getElementById("sub_section").style.display = "block";
});

mulBtn.addEventListener("click", (event) => {
  const first_num = Math.floor((Math.random() * 100) / 2);
  const second_num = Math.floor((Math.random() * 100) / 2);

  subNumber.classList.add("hide");
  addNumber.classList.add("hide");
  divNumber.classList.add("hide");
  modNumber.classList.add("hide");
  mulNumber.classList.remove("hide");

  mulNumber.innerHTML = `${first_num + "x" + second_num + "="}
 <!-- See http://www.menucool.com/tooltip/css-tooltip -->
<div
  id="mul_tile"
  answer=${first_num * second_num}
  style="border-bottom: 0"
  class="btn btn-primary tooltip"
>
  ?
  <div class="top">
    <h3 id="mulTileAnswer">Click to see the answer!</h3>
    <i></i>
  </div>
</div>`;
  mulTile1();
  document.getElementById("mul_section").style.display = "block";
});

divBtn.addEventListener("click", (event) => {
  const first_num = Math.floor((Math.random() * 100) / 2);
  const second_num = Math.floor((Math.random() * 100) / 2);

  subNumber.classList.add("hide");
  mulNumber.classList.add("hide");
  addNumber.classList.add("hide");
  modNumber.classList.add("hide");
  divNumber.classList.remove("hide");

  divNumber.innerHTML = `${first_num + "/" + second_num + "="}
 <!-- See http://www.menucool.com/tooltip/css-tooltip -->
<div
  id="div_tile"
  answer=${(first_num / second_num).toFixed(2)}
  style="border-bottom: 0"
  class="btn btn-primary tooltip"
>
  ?
  <div class="top">
    <h3 id="divTileAnswer">Click to see the answer!</h3>
    <i></i>
  </div>
</div>`;
  divTile1();
  document.getElementById("div_section").style.display = "block";
});

modBtn.addEventListener("click", (event) => {
  const first_num = Math.floor((Math.random() * 100) / 2);
  const second_num = Math.floor((Math.random() * 100) / 2);

  subNumber.classList.add("hide");
  mulNumber.classList.add("hide");
  divNumber.classList.add("hide");
  addNumber.classList.add("hide");
  modNumber.classList.remove("hide");

  modNumber.innerHTML = `${first_num + "%" + second_num + "="}
 <!-- See http://www.menucool.com/tooltip/css-tooltip -->
<div
  id="mod_tile"
  answer=${first_num % second_num}
  style="border-bottom: 0"
  class="btn btn-primary tooltip"
>
  ?
  <div class="top">
    <h3 id="modTileAnswer">Click to see the answer!</h3>
    <i></i>
  </div>
</div>`;
  modTile1();
  document.getElementById("mod_section").style.display = "block";
});
