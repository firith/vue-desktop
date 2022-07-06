<template>
  <div
    class="rounded bg-gray-200 px-1 py-0.5 font-mono text-xs font-semibold text-gray-700 dark:bg-gray-600 dark:text-gray-400"
  >
    {{ formatDuration(duration, true) }}
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useDuration } from '@/composables/useDuration'
import { useIntervalFn } from '@vueuse/core/index'

const props = defineProps({ task: Object })

const duration = ref(props.task.duration)

const { resume, pause } = useIntervalFn(() => (duration.value = props.task.duration), 1000)

watch(
  () => props.task.running,
  (running) => {
    running ? resume() : pause()
  },
  { immediate: true }
)

const { formatDuration } = useDuration()
</script>
