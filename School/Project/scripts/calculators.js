import * as bmicalculator from "./bmicalculator.js";
import * as bfcalculator from "./bfcalculator.js";

document.addEventListener("DOMContentLoaded", (event) => {
  bmicalculator.calculateBmi();
  bfcalculator.calculateBFat();
  bmicalculator.bmiMetric.addEventListener("click", bmicalculator.bmiM);
  bmicalculator.bmiUs.addEventListener("click", bmicalculator.bmiU);
  bmicalculator.bmiHeight1.addEventListener("blur", bmicalculator.calculateBmi);
  bmicalculator.bmiHeight2.addEventListener("blur", bmicalculator.calculateBmi);
  bmicalculator.bmiWeight.addEventListener("blur", bmicalculator.calculateBmi);
  bfcalculator.female.addEventListener("click", bfcalculator.bfFemale);
  bfcalculator.male.addEventListener("click", bfcalculator.bfMale);
  bfcalculator.feet.addEventListener("blur", bfcalculator.calculateBFat);
  bfcalculator.inch.addEventListener("blur", bfcalculator.calculateBFat);
  bfcalculator.bfWeight.addEventListener("blur", bfcalculator.calculateBFat);
  bfcalculator.waist.addEventListener("blur", bfcalculator.calculateBFat);
  bfcalculator.hip.addEventListener("blur", bfcalculator.calculateBFat);
  bfcalculator.neck.addEventListener("blur", bfcalculator.calculateBFat);

  function success(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=6d23e08395bec16e7a58182bee901115`;
    let cityTemp = document.querySelector(".city-temp");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let str = data.weather.icon;
        cityTemp.innerHTML = `${data.name}: ${data.main.temp}<sup>0</sup>F / ${(
          ((data.main.temp - 32) * 5) /
          9
        ).toFixed(0)}<sup>0</sup>C, ${
          data.weather[0].description
        }<img width="27" src="https://openweathermap.org/img/wn/${
          data.weather[0].icon
        }@2x.png" alt="weather">`;
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
