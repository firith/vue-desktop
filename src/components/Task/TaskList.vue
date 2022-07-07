<template>
  <draggable
    v-if="items.length > 0"
    handle=".handle"
    :disabled="!editMode"
    v-model="items"
    item-key="id"
    class="divide-y bg-white/80 py-2 dark:divide-gray-600 dark:bg-transparent"
    ghost-class="ghost"
    drag-class="drag"
  >
    <template #item="{ element }">
      <TaskListItem :task="element" :edit-mode="editMode" />
    </template>
  </draggable>
</template>
<script setup>
import { computed } from 'vue'
import TaskListItem from '@/components/Task/ListItem'
import { useTasks } from '@/composables/useTasks'
import Draggable from 'vuedraggable'

defineProps({ editMode: Boolean })

const store = useTasks()

const items = computed({
  get: () => store.tasks,
  set: (tasks) => store.$patch((state) => (state.tasks = tasks)),
})
</script>

<style scoped>
.drag {
  @apply bg-white/80 dark:bg-gray-600;
}

.ghost {
  @apply bg-blue-100/80 dark:bg-gray-700;
}
</style>
