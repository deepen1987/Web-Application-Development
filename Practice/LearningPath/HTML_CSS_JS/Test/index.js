document.addEventListener("DOMContentLoaded", () => {
  function deep() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  async function caller() {
    let a = await deep();
    document.getElementById("text").innerHTML = a;
    console.log(a);
  }
  document.getElementById("d").addEventListener("click", caller);
});
