import { v4 as uuid } from "uuid";

export class Task {
  constructor(duration = 0) {
    this._duration = duration;
    this._id = uuid();
    this._startDate = null;
  }

  get duration() {
    if (this._startDate != null) {
      const diff = new Date().getTime() - this._startDate;
      return this._duration + Math.round(diff / 1000);
    }

    return this._duration;
  }

  get running() {
    return this._startDate != null;
  }

  start() {
    if (this._startDate != null) {
      return;
    }

    this._startDate = new Date().getTime();
  }

  stop() {
    if (this._startDate == null) {
      return;
    }

    const diff = new Date().getTime() - this._startDate;
    this._duration += Math.round(diff / 1000);

    this._startDate = null;
  }

  reset() {
    this._duration = 0;
    this._startDate = null;
  }

  static fromObject(object) {
    const task = new Task(object._duration);
    task._id = object._id;
    task._startDate = object._startDate;

    return task;
  }
}
