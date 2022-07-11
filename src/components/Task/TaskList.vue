<template>
  <draggable v-if="items.length > 0" v-model="items" item-key="id" ghost-class="ghost">
    <template #item="{ element }">
      <TaskWidget :task="element" />
    </template>
  </draggable>
</template>
<script setup>
import { computed } from 'vue'
import { useTasks } from '@/composables/useTasks'
import Draggable from 'vuedraggable'
import TaskWidget from '@/components/Task/TaskWidget'

const store = useTasks()

const items = computed({
  get: () => store.tasks,
  set: (tasks) => store.$patch((state) => (state.tasks = tasks)),
})
</script>

<style scoped>
.ghost {
  @apply opacity-70;
}
</style>
