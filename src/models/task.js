import { v4 as uuid } from 'uuid'

export class Task {
  constructor(duration = 0) {
    this._duration = duration
    this.id = uuid()
    this.startDate = null
    this.pinned = false
  }

  get duration() {
    if (this.startDate != null) {
      const diff = new Date().getTime() - this.startDate
      return this._duration + Math.round(diff / 1000)
    }

    return this._duration
  }

  get running() {
    return this.startDate != null
  }

  start() {
    if (this.startDate != null) {
      return
    }

    this.startDate = new Date().getTime()
  }

  stop() {
    if (this.startDate == null) {
      return
    }

    const diff = new Date().getTime() - this.startDate
    this._duration += Math.round(diff / 1000)

    this.startDate = null
  }

  reset() {
    this._duration = 0
    this.startDate = null
  }

  static fromObject(object) {
    const task = new Task(object._duration)
    task.id = object.id
    task.startDate = object.startDate
    task.pinned = object.pinned

    return task
  }
}
