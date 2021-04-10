function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      defaultLocation = value;
    },
  });
}

let circle1 = new Circle(1);
circle1.newProperty = "Hello";
console.log(circle1);
delete circle1.radius;

circle1.defaultLocation = { x: 1, y: 1 };

console.log(circle1);

function namo(radius) {
  return {
    radius,
  };
}

let circle2 = namo(2);

console.log(circle2.constructor);
