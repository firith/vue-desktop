<template>
  <IButton
    v-if="!task.running"
    flat
    round
    class="p-0.5 hover:bg-blue-600/20 active:bg-blue-600/30"
    @click="$emit('start')"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M8 5v14l11-7z" />
    </svg>
  </IButton>
  <IButton v-if="task.running" flat round class="p-0.5 hover:bg-red-500/20 active:bg-red-500/30" @click="$emit('stop')">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  </IButton>
</template>

<script setup>
import IButton from '@/components/IButton'

defineProps({ task: Object })
defineEmits(['start', 'stop'])
</script>
