function Stopwatch() {
  let startTime,
    stopTime,
    duration,
    running = 0;

  this.start = function () {
    if (running) {
      throw new Error("Stopwatch has already started");
    } else {
      running = true;
      startTime = new Date();
    }
  };

  this.stop = function () {
    if (!running) {
      throw new Error("Stopwatch is not started");
    } else {
      running = false;
      stopTime = new Date();
      const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds;
    }
  };

  this.reset = function () {
    duration = 0;
    running = false;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
