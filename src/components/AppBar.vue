<template>
  <div>
    <header id="title-bar" :class="['bg-blue-600', platformStore.os === 'darwin' ? 'h-7' : 'h-8']"></header>
    <header :class="['relative flex min-h-[48px] items-center justify-center bg-indigo-700 p-4']">
      <div class="absolute right-2">
        <slot name="right"></slot>
      </div>
      <slot name="middle"></slot>
    </header>
    <div v-if="platformStore.updateDownloaded">
      <div class="rounded-md bg-blue-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <InformationCircleIcon class="h-5 w-5 text-blue-400" aria-hidden="true" />
          </div>
          <div class="ml-3 flex-1 md:flex md:justify-between">
            <p class="text-sm text-blue-700">Új Timer verzió elérhető. Frissítéshez indítsd újra az alkalmazást</p>
            <p class="mt-3 text-sm md:mt-0 md:ml-6">
              <button @click="restart" class="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
                Újraindítás
                <span aria-hidden="true">&rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePlatform } from '@/composables/usePlatform'
import { InformationCircleIcon } from '@heroicons/vue/outline'

const platformStore = usePlatform()

function restart() {
  window.electronApi.restartApp()
}
</script>

<style scoped>
#title-bar {
  -webkit-app-region: drag;
  -webkit-user-select: none;
}
</style>
