class Shape {
  parentMove() {
    console.log("Parent call");
  }
}

// Normal Class
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
    this.move = function () {
      console.log("move");
    };
  }
  parentMove() {
    super.parentMove();
    console.log("Child Move");
  }
  draw() {
    console.log("draw");
  }
}

let c = new Circle(1);
c.parentMove();

// Defining Private members using Symbols
const _radius = Symbol();
const _draw = Symbol();
class Circle1 {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {
    console.log("draw");
  }
}

const d = new Circle1(2);
const key = Object.getOwnPropertySymbols(d)[0];
console.log(d[key]);

// Defining private members using WeakMaps

const _radius1 = new WeakMap();
const _move = new WeakMap();

class Circle2 {
  constructor(radius) {
    _radius1.set(this, radius);

    _move.set(this, () => {
      console.log("Move", this);
    });
  }

  draw() {
    _move.get(this)();
    console.log(_radius1.get(this)); // We can use this to access private members value, should avoid accessing private members.
  }
}

let c2 = new Circle2(111);

c2.draw();
