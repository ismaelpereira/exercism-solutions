export class Clock {
  constructor(hours, minutes) {
    if (!hours || hours === 24) {
      hours = 0;
    }
    if (!minutes) {
      minutes = 0;
    }
    this._minutes = minutes + hours * 60;
  }

  toString() {
    let h = minutesToHours(this._minutes);
    if (h < 0) {
      h += 24;
    }
    let m = (this._minutes + 60 * 24) % 60;
    if (m < 0) {
      m += 60;
    }
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
  }

  plus(min) {
    let schedule = new Clock(0, this._minutes + min);
    return schedule;
  }

  minus(min) {
    let schedule = new Clock(0, this._minutes - min);
    return schedule;
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }
}

const minutesToHours = (minutes) => {
  if (minutes < 0) {
    minutes = minutes + 60 * 24;
  }
  return Math.floor(minutes / 60) % 24;
};
