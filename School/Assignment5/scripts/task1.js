$(document).ready(function () {
  let index = 1;
  function sleep() {
    setTimeout(() => {
      console.log(index);
      $(".content").text(index);
      index++;
      if (index <= 10) {
        sleep();
      }
    }, 1000);
  }

  sleep();

  //   const wait = (ms) => new Promise((res) => setTimeout(res, ms));

  //   async function load() {
  //     for (let index = 0; index < 10; index++) {
  //       await wait(1000);
  //       $(".content").text(index);
  //     }
  //   }

  //   load();
});
