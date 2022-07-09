<template>
  <header
    :class="[
      'sticky top-0 bg-gradient-to-r from-blue-700 to-blue-700 shadow-xl dark:from-blue-700 dark:to-blue-800',
      platformStore.os === 'darwin' ? 'pt-8 pb-4' : '',
    ]"
  >
    <div class="flex items-center justify-center">
      <div class="text-xl text-white">
        <slot name="left" />
      </div>

      <div :class="['absolute flex items-center space-x-1', platformStore.os === 'darwin' ? 'right-2' : 'right-0']">
        <slot name="right"></slot>
      </div>
    </div>
  </header>
</template>

<script setup>
import { usePlatform } from '@/composables/usePlatform'

const platformStore = usePlatform()
</script>

<style scoped>
header {
  -webkit-app-region: drag;
  -webkit-user-select: none;
}
</style>
