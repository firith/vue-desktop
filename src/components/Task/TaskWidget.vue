<template>
  <div>
    <div
      :class="[
        'relative h-auto overflow-hidden rounded-lg px-5 pb-5 pt-5 shadow',
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

      <TaskExpanded
        v-else
        :task="task"
        :duration="duration"
        @start="start"
        @stop="stop"
        @minimize="expanded = false"
        @delete="$emit('delete', task)"
      />
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
defineEmits(['delete'])
const { resume, pause } = useIntervalFn(() => (duration.value = props.task.duration), 1000)

const tasksStore = useTasks()
const duration = ref(props.task.duration)
const expanded = ref(props.task.running)

function start() {
  tasksStore.startTask(props.task)
  resume()
}

function stop() {
  tasksStore.stopTask(props.task)
  pause()
}
</script>
