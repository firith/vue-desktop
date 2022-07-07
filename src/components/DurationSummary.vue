<template>
  <div class="text-sm text-gray-800 dark:text-gray-300">
    Összesen: <strong>{{ formatDuration(sumDuration) }}</strong> (Timer:
    <strong>{{ formatDuration(timerDuration) }}</strong> + Redmine:
    <strong>{{ formatDuration(redmineDuration) }}</strong>
  </div>
  <div class="h-2 rounded-full bg-gray-300 shadow-inner dark:bg-gray-700">
    <div class="h-2 rounded-full bg-red-500 dark:bg-red-800" style="width: 40%"></div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useTasks } from '@/composables/useTasks'
import { useDuration } from '@/composables/useDuration'
import { useIntervalFn } from '@vueuse/core/index'

const tasksStore = useTasks()

const timerDuration = ref(tasksStore.sumTime)
const redmineDuration = ref(1800)

const { resume } = useIntervalFn(() => {
  timerDuration.value = tasksStore.sumTime()
}, 1000)

const sumDuration = computed(() => timerDuration.value + redmineDuration.value)

onMounted(() => resume())
onMounted(() => (timerDuration.value = tasksStore.sumTime()))

const { formatDuration } = useDuration()
</script>
