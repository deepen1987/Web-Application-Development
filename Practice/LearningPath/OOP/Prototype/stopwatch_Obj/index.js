function Stopwatch() {
  this.startTime = this.startTime;
  this.stopTime = this.stopTime;
  this.duration = 0;
  this.running = false;

  // Object.defineProperty(this, "duration", {
  //   get: function () {
  //     return this.duration;
  //   },
  // });
}

Stopwatch.prototype.start = function () {
  if (this.running) {
    throw new Error("Stopwatch has already started");
  } else {
    this.running = true;
    this.startTime = new Date();
  }
};

Stopwatch.prototype.stop = function () {
  if (!this.running) {
    throw new Error("Stopwatch is not started");
  } else {
    this.running = false;
    this.stopTime = new Date();
    const seconds = (this.stopTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
  }
};

Stopwatch.prototype.reset = function () {
  this.duration = 0;
  this.running = false;
};
