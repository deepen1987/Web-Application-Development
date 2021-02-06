function cars(car_brand, car_model, car_price) {
  this.car_brand = car_brand;
  this.car_model = car_model;
  this.car_price = car_price;

  this.testautopilot = function () {
    return "this is an autopilot \n";
  };
}

var c1 = new cars("tesla", 3, 35000);
var c2 = new cars("tesla", "S", 65000);

document.write(c1.testautopilot());
document.write(c1.car_model + "\n");
document.write(c1.car_price + "\n");
document.write(c2.car_model + "\n");
document.write(c2.car_price) + "\n";

function changeText() {
  var x = (document.getElementById("p").innerHTML = "Deependra was here");
  alert(x);
}
