<template>
  <AppBar>
    <template #left>
      <IntrenLogo class="h-4" />
    </template>
    <template #right>
      <IButton @click="editMode = false" v-if="editMode">
        <div class="py-[2px] text-sm uppercase text-white">Kész</div>
      </IButton>
      <IButton round flat @click="editMode = true" v-if="!editMode">
        <PencilIcon class="h-6 text-white" />
      </IButton>

      <IButton round flat @click="$router.push('/settings')" v-if="!editMode">
        <CogIcon class="h-6 text-white" />
      </IButton>
    </template>
  </AppBar>
  <AppContent class="bg-tree bg-right-bottom bg-no-repeat dark:bg-none">
    <TaskList :edit-mode="editMode" />

    <button @click="onClick">add</button>
  </AppContent>

  <AppFooter />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TaskList from '@/components/Task/TaskList'
import { useTasks } from '@/composables/useTasks'
import AppBar from '@/components/AppBar'
import { Task } from '@/models/task'
import AppFooter from '@/components/AppFooter'
import IntrenLogo from '@/components/IntrenLogo'
import IButton from '@/components/IButton'
import { CogIcon, PencilIcon } from '@heroicons/vue/solid'
import AppContent from '@/components/AppContent'
import { useProjects } from '@/composables/useProjects'

const editMode = ref(false)
const tasksStore = useTasks()

function onClick() {
  tasksStore.addTask(new Task())
}
</script>
