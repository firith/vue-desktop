<template>
  <main :class="['flex-1 p-5 dark:bg-gray-800', platformStore.os === 'darwin' ? 'macos' : 'windows']">
    <slot></slot>
  </main>
</template>

<script setup>
import { usePlatform } from '@/composables/usePlatform'

const platformStore = usePlatform()
</script>
