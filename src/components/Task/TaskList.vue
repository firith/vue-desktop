<template>
  <div
    class="divide-y bg-white/80 py-2 dark:divide-gray-600 dark:bg-transparent"
  >
    <TaskListItem v-for="task in state.tasks" :key="task.id" :task="task" />
  </div>
</template>
<script setup>
import TaskListItem from "@/components/Task/ListItem";
import { useTasks } from "@/composables/useTasks";

const state = useTasks();
</script>
