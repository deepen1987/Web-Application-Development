document.addEventListener("DOMContentLoaded", () => {
  let i = 0;
  document.getElementById("btn").addEventListener("click", () => {
    i += 1;

    document.getElementById("btn").innerHTML = i;
  });
});
