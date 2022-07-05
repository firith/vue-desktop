<template>
  <AppBar>
    <template #left>
      <IntrenLogo class="h-5" />
    </template>
    <template #right>
      <IButton round flat>
        <PencilIcon class="h-6 text-white" />
      </IButton>

      <IButton round flat>
        <CogIcon class="h-6 text-white" />
      </IButton>
    </template>
  </AppBar>
  <div
    class="h-full bg-tree bg-right-bottom bg-no-repeat dark:bg-gray-800 dark:bg-none"
  >
    <TaskList />

    <button @click="onClick">add</button>
  </div>

  <AppFooter />
</template>

<script setup>
import TaskList from "@/components/Task/TaskList";
import { useTasks } from "@/composables/useTasks";
import AppBar from "@/components/AppBar";
import { Task } from "@/models/task";
import AppFooter from "@/components/AppFooter";
import IntrenLogo from "@/components/IntrenLogo";
import IButton from "@/components/IButton";
import { CogIcon, PencilIcon } from "@heroicons/vue/solid";

const tasksState = useTasks();

function onClick() {
  tasksState.addTask(new Task());
}
</script>
