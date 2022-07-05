<template>
  <div class="text-sm text-gray-800 dark:text-gray-300">
    Összesen: <strong>{{ formatDuration(sumDuration) }}</strong> (Timer:
    <strong>{{ formatDuration(timerDuration) }}</strong> + Redmine:
    <strong>{{ formatDuration(redmineDuration) }}</strong>
  </div>
  <div class="h-2 rounded-full bg-gray-300 shadow-inner dark:bg-gray-700">
    <div class="h-2 rounded-full bg-red-500" style="width: 40%"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useTasks } from "@/composables/useTasks";
import { useDuration } from "@/composables/useDuration";
import { useIntervalFn } from "@vueuse/core/index";
const taskState = useTasks();

const timerDuration = ref(taskState.sumTime);
const redmineDuration = ref(3600);

const { resume } = useIntervalFn(() => {
  timerDuration.value = taskState.sumTime();
}, 1000);

const sumDuration = computed(() => timerDuration.value + redmineDuration.value);

onMounted(() => resume());

const { formatDuration } = useDuration();
</script>
