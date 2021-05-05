document.addEventListener("DOMContentLoaded", () => {
  let url = `https://jsonplaceholder.typicode.com/todos/10`;
  function createE(ele) {
    return document.createElement(ele);
  }

  let ul = createE("ul");
  document.body.appendChild(ul);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (const key in data) {
        let li = createE("li");
        let liName = document.createTextNode(data[key]);
        li.appendChild(liName);
        ul.appendChild(li);
      }
    });
});
