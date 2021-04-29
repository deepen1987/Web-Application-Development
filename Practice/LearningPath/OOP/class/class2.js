const l = console.log;

class Transport1 {
  constructor() {
    this.running = false;
    this.start = () => {
      l("Started");
      this.running = true;
    };
    this.stop = () => {
      l("Stopped");
      this.running = false;
    };
  }
}

const _move = new WeakMap();
class Car extends Transport1 {
  constructor(name) {
    super();
    this.name = name;

    _move.set(this, () => {
      l("Moving", this);
    });
  }

  moving = () => {
    _move.get(this)();
  };

  static ran = () => {
    l("Running");
  };
}

const t = new Transport1();

const c = new Car("Honda");
