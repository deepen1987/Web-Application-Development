let log = console.log;

if (("geolocation", navigator)) {
  console.log("its here");
} else {
  console.log("not here");
}
document.addEventListener("DOMContentLoaded", () => {
  let loc = document.getElementById("location");
  let temp = document.getElementById("temp");
  //   document.getElementById("status").addEventListener("click", () => {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       let lat = position.coords.latitude;
  //       let long = position.coords.longitude;
  //       console.log(lat, long);
  //       loc.href = `https://www.google.com/maps/@${lat},${long},15z`;
  //       loc.textContent = `${lat} ${long}`;
  //     });
  //   });

  function success(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=6d23e08395bec16e7a58182bee901115`;

    // const marker = new google.maps.Marker({
    //   position: { lat, long },
    //   map: map,
    // });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let str = JSON.stringify(data);
        log();
        loc.href = `https://www.google.com/maps/@${lat},${long},15z`;
        loc.textContent = data.name;
        temp.innerHTML = `Temp: ${data.main.temp}<sup>0</sup>F`;
      })
      .catch(handleErr);
  }
  function handleErr(err) {}

  function error() {
    console.log("No position data");
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 27000,
  };

  if (!("geolocation", navigator)) {
    loc.textContent = "Not supported by your browser";
  } else {
    navigator.geolocation.watchPosition(success, error, options);
  }
});
