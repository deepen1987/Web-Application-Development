document.addEventListener("DOMContentLoaded", () => {
  async function returnOne() {
    return 1;
  }

  document.getElementById("btn").addEventListener("click", () => {
    returnOne().then((value) => {
      document.getElementById("text").innerHTML = value;
    });
  });
});
