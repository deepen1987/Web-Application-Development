document.addEventListener("DOMContentLoaded", () => {
  async function check() {
    return setTimeout(() => {
      resolve("Timer 1 sec");
    }, 5000);
  }

  async function formSubmit(event) {
    event.preventDefault();

    $("#loader").addClass("loader");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    $("#loader").removeClass("loader");
    const data = new FormData(event.target);

    let obj = {};
    for (const key of data.keys()) {
      obj[key] = data.get(key);
    }
    console.log(obj);

    document.getElementById("data").innerHTML = `${JSON.stringify(obj)}`;

    // const values1 = Object.fromEntries(data.entries());
    // const data1 = Object.values(values1);
    // console.log(data1);

    // document.getElementById(
    //   "data"
    // ).innerHTML = `${data1[0]}\n${data1[1]}\n${data1[2]}\n${data1[3]}\n`;
  }

  let form = document.querySelector("form");
  form.addEventListener("submit", formSubmit);
});

// for FormData to work you have to have name property inside each element.
