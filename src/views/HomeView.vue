<template>
  <div
    class="h-full bg-tree bg-right-bottom bg-no-repeat dark:bg-gray-800 dark:bg-none"
  >
    <TaskList />

    <button @click="onClick">add</button>
  </div>
</template>

<script setup>
import TaskList from "@/components/Task/TaskList";
import { useTasks } from "@/composables/useTasks";
import { Task } from "@/models/task";

const tasksState = useTasks();

function onClick() {
  tasksState.addTask(new Task());
}
</script>
