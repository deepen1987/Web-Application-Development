$(document).ready(() => {
  $("#btn").on("click", run);

  function run() {
    let one = $("#1").val();
    let two = $("#2").val();

    const prom = new Promise((resolve, reject) => {
      if (one === two) {
        resolve("They are Equal");
      } else {
        reject(new Error("Not Equal"));
      }
    });

    prom.then(
      (msg) => {
        console.log(`Resolved ${msg}`);
      },
      (err) => {
        console.log(`Reject ${err.message}`);
      }
    );
  }
});
