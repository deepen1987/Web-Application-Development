document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    const values = Object.fromEntries(data.entries());

    console.log(values);
  });
});
