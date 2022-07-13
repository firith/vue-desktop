<template>
  <div>
    <div
      :class="[
        'relative h-auto overflow-hidden rounded-lg px-5 pb-5 pt-8 shadow',
        task.running ? 'bg-green-300' : 'bg-green-200',
      ]"
    >
      <TaskMinimized
        v-if="!expanded"
        :task="task"
        :duration="duration"
        @start="start"
        @stop="stop"
        @expand="expanded = true"
      />

      <TaskExpanded v-else :task="task" :duration="duration" @start="start" @stop="stop" @minimize="expanded = false" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTasks } from '@/composables/useTasks'
import { useIntervalFn } from '@vueuse/core/index'
import TaskExpanded from '@/components/Task/TaskExpanded'
import TaskMinimized from '@/components/Task/TaskMinimized'

const props = defineProps({ task: Object })
const { resume, pause } = useIntervalFn(() => (duration.value = props.task.duration), 1000)

const taskStore = useTasks()
const duration = ref(props.task.duration)
const expanded = ref(props.task.running)

function start() {
  taskStore.startTask(props.task)
  resume()
}

function stop() {
  taskStore.stopTask(props.task)
  pause()
}
</script>
