export const addBtn = document.querySelector("#addBtn");
export const subBtn = document.querySelector("#subBtn");
export const mulBtn = document.querySelector("#mulBtn");
export const divBtn = document.querySelector("#divBtn");
export const modBtn = document.querySelector("#modBtn");

export function addTile1() {
  const addTile = document.getElementById("addition_tile");
  const addTileAns = document.getElementById("addTileAnswer");
  addTile.addEventListener("click", (event) => {
    const answer = addTile.getAttribute("answer");
    addTileAns.innerHTML = answer;
    window.setTimeout(function () {
      addTileAns.innerHTML = "Click to see the answer!";
    }, 2300);
  });
}

export function subTile1() {
  const subTile = document.getElementById("sub_tile");
  const subTileAns = document.getElementById("subTileAnswer");
  subTile.addEventListener("click", (event) => {
    const answer = subTile.getAttribute("answer");
    subTileAns.innerHTML = answer;
    window.setTimeout(function () {
      subTileAns.innerHTML = "Click to see the answer!";
    }, 2300);
  });
}

export function mulTile1() {
  const mulTile = document.getElementById("mul_tile");
  const mulTileAns = document.getElementById("mulTileAnswer");
  mulTile.addEventListener("click", (event) => {
    const answer = mulTile.getAttribute("answer");
    mulTileAns.innerHTML = answer;
    window.setTimeout(function () {
      mulTileAns.innerHTML = "Click to see the answer!";
    }, 2300);
  });
}

export function divTile1() {
  const divTile = document.getElementById("div_tile");
  const divTileAns = document.getElementById("divTileAnswer");
  divTile.addEventListener("click", (event) => {
    const answer = divTile.getAttribute("answer");
    divTileAns.innerHTML = answer;
    window.setTimeout(function () {
      divTileAns.innerHTML = "Click to see the answer!";
    }, 2300);
  });
}

export function modTile1() {
  const modTile = document.getElementById("mod_tile");
  const modTileAns = document.getElementById("modTileAnswer");
  modTile.addEventListener("click", (event) => {
    const answer = modTile.getAttribute("answer");
    modTileAns.innerHTML = answer;
    window.setTimeout(function () {
      modTileAns.innerHTML = "Click to see the answer!";
    }, 2300);
  });
}
