function Shape() {
  this.duplicate = function () {};
}

Circle.prototype = Object.create(Shape.prototype);

function Circle() {
  this.draw = function () {};
}

function mixins(target, ...sources) {
  Object.assign(target.prototype, ...sources);
}

const canEat = {
  eat: function () {
    console.log("Eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

const canSwim = {
  swim: function () {
    console.log("swiming");
  },
};

function Goldfish() {}
mixins(Goldfish, canEat, canSwim);
const goldfish = new Goldfish();

function Persons() {}
mixins(Persons, canEat, canWalk);
const person = new Persons();
