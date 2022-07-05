import { defineStore } from "pinia";
import { Task } from "@/models/task";
import { useStorage } from "@vueuse/core";

export const useTasks = defineStore("tasks", {
  state: () => ({
    tasks: useStorage("tasks", [], undefined, {
      serializer: {
        read: (v) =>
          v ? JSON.parse(v).map((each) => Task.fromObject(each)) : [],
        write: (v) => JSON.stringify(v),
      },
    }),
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    startTask(task) {
      this.tasks.forEach((each) => each.stop());
      task.start();
    },

    stopTask(task) {
      console.log("stop");
      const entry = this.tasks.find((each) => each._id === task._id);
      entry.stop();
    },

    stopAllTasks() {
      this.tasks.forEach((task) => task.stop());
    },

    sumTime() {
      return this.tasks
        .map((each) => each.duration)
        .reduce((sum, duration) => sum + duration);
    },
  },
});
