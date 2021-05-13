$(document).ready(function () {
  let url = `https://api.publicapis.org/entries`;

  async function a() {
    let data = await axios.get(url).then((response) => response.data);

    console.log(data.entries[0].Link);
  }

  a();

  async function b() {
    let data1 = await fetch(`https://cataas.com/cat`);
    console.log(data1);

    if (data1.headers.get("content-type") === "image/jpeg") {
      let blob = await data1.blob();
      let uri = URL.createObjectURL(blob);

      const image = new Image();
      image.src = uri;
      document.querySelector("div").appendChild(image);
    }
  }
  b();
});
