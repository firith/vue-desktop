<template>
  <AppBar class="py-4">
    <template #left>
      <IntrenLogo class="h-5" />
    </template>
  </AppBar>
  <AppContent class="flex bg-tree bg-right-bottom bg-no-repeat dark:bg-none">
    <div class="flex flex-1 flex-col space-y-4 bg-white/90 p-4 dark:bg-transparent">
      <div class="text-2xl font-light text-gray-900 dark:text-gray-300">A belépéshez add meg az email címedet!</div>
      <div class="flex flex-col space-y-2">
        <label for="email" class="text-gray-900 dark:text-gray-300">E-mail</label>
        <input type="text" id="email" class="rounded text-gray-900 dark:bg-gray-600 dark:text-gray-300" autofocus />
      </div>
      <button class="inline-block rounded bg-blue-600 py-2 text-center text-white" :to="{ name: 'home' }" @click="save">
        Save
      </button>
    </div>
  </AppContent>
</template>

<script setup>
import AppBar from '@/components/AppBar'
import IntrenLogo from '@/components/IntrenLogo'
import AppContent from '@/components/AppContent'
import { useRouter } from 'vue-router'
import { useSettings } from '@/composables/useSettings'

const router = useRouter()
const settingsStore = useSettings()

function save() {
  settingsStore.$patch((state) => {
    state.settings.user_id = 10
  })
  router.push({ name: 'home' })
}
</script>
