document.addEventListener("DOMContentLoaded", () => {
  function hello() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Timer 3 sec");
      }, 3000);
    });
  }

  async function interval() {
    let data = await hello();
    console.log(data);
  }

  interval();
});
