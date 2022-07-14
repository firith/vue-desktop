<template>
  <div class="flex h-screen flex-col bg-white dark:bg-gray-800">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import { useTasks } from '@/composables/useTasks'
import { usePlatform } from '@/composables/usePlatform'

const tasksStore = useTasks()
const platformStore = usePlatform()

onMounted(() => {
  window.electronApi.onUpdateAvailable((event) => console.log('available', { event }))
  window.electronApi.onUpdateDownloaded((event) => platformStore.$patch({ updateDownloaded: true }))
  window.electronApi.onAppQuit(() => {
    console.log('quit')
    tasksStore.stopAllTasks()
    window.electronApi.quit()
  })
  window.electronApi.onOperatingSystem((_, os) => platformStore.$patch({ os }))
  window.electronApi.fetchOperatingSystem()
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,400;8..144,500;8..144,600;8..144,700&family=Roboto+Mono:wght@400;500;600;700&display=swap');
</style>
