export class Timer {

  lastTime;
  duration;

  constructor(duration, startTime = 0) {
    this.lastTime = startTime;
    this.duration = duration;
  }


  isOver(time) {
    var over = false;

    if ((time - this.lastTime) > this.duration) {
      over = true;
      this.lastTime = time;
    }
    return over;
  }
}
