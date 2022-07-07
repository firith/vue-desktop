import { defineStore } from 'pinia'
import { Task } from '@/models/task'
import { useStorage } from '@vueuse/core'

export const useTasks = defineStore('tasks', {
  state: () => ({
    tasks: useStorage('tasks', [], undefined, {
      serializer: {
        read: (v) => (v ? JSON.parse(v).map((each) => Task.fromObject(each)) : []),
        write: (v) => JSON.stringify(v),
      },
    }),
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },

    deleteTask(task) {
      this.tasks = this.tasks.filter((each) => each.id !== task.id)
    },

    startTask(task) {
      this.tasks.forEach((each) => each.stop())
      task.start()
    },

    stopTask(task) {
      const entry = this.tasks.find((each) => each.id === task.id)
      entry.stop()
    },

    stopAllTasks() {
      this.tasks.forEach((task) => task.stop())
    },

    pinTask(task, pinned) {
      this.tasks = this.tasks.map((each) => {
        if (each.id !== task.id) {
          return each
        }

        each.pinned = pinned
        return each
      })
    },

    sumTime() {
      return this.tasks.map((each) => each.duration).reduce((sum, duration) => sum + duration, 0)
    },
  },
})
