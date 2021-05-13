let _radius = new WeakMap();

export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log(_radius.get(this));
  }
}
