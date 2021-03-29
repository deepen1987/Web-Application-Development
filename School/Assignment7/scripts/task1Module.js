export let add = document.getElementById("add");
export let display = document.getElementById("display");
export let clear = document.getElementById("clear");
export let tbody = document.querySelector(".tbody");
export let inArray = [];

export function show() {
  tbody.innerHTML = "";
  for (const i in inArray) {
    createElement(i, inArray[i]);
  }
}

export function clearArray() {
  inArray = [];
  tbody.innerHTML = "";
}

export function editArray(index, data) {
  inArray[index] = data;
}

export function delArrayElement(index) {
  inArray.splice(index, 1);
  show();
}

export function createElement(index, data) {
  tbody.insertAdjacentHTML(
    "beforeend",
    `<tr class="row${index}"><td id=${index}>${data}</td><td><img src="images/edit.svg" alt="edit button" class="${index}" id="edit${index}"><img src="images/del.svg" alt="delete button" class="${index}" id="delete${index}"></td></tr>`
  );
}
