<template>
  <div class="flex h-screen flex-col bg-white dark:bg-gray-800">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import { useTasks } from '@/composables/useTasks'

const tasksStore = useTasks()

onMounted(() => {
  window.electronApi.onUpdateAvailable((event) => console.log('available', { event }))
  window.electronApi.onUpdateDownloaded((event) => console.log('downloaded', { event }))
  window.electronApi.onAppQuit(() => tasksStore.stopAllTasks())
})
</script>
