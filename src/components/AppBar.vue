<template>
  <div class="sticky top-0 z-50">
    <header :class="['h-7 bg-blue-600']" v-if="platformStore.os === 'darwin'"></header>
    <header :class="['relative flex min-h-[48px] items-center justify-center bg-indigo-700 p-4']">
      <div class="absolute right-2">
        <slot name="right"></slot>
      </div>
      <slot name="middle"></slot>
    </header>
  </div>
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
