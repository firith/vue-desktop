<template>
  <div class="flex items-center space-x-2 p-2">
    <div class="flex items-center space-x-1">
      <IButton round flat v-if="editMode" class="hover:bg-red-500/20 active:bg-red-500/30" @click="deleteTask">
        <TrashIcon class="h-6 w-6 text-red-600" />
      </IButton>
      <TaskButton v-if="!editMode" :task="task" @start="start" @stop="stop" />
      <TaskDuration :task="task" />

      <TaskFavorite :task="task" @change="onPinChanged" />
    </div>

    <div class="flex min-w-0 flex-1 flex-col text-gray-800 dark:text-gray-300">
      <div class="text overflow-hidden truncate">
        DEV - accenthotels.com [ReWork v3,4,5] (Accent Hotel Solutions Kft.)
      </div>
      <div class="overflow-hidden truncate text-sm text-blue-600 underline">
        #18119 Alternatív foglalómotoros eset (12Révay - Globres)
      </div>
      <div class="overflow-hidden truncate text-xs text-blue-600 underline">Alternatív foglalómotor implementálása</div>
    </div>

    <div class="handle p-1.5" v-if="editMode">
      <ViewListIcon class="h-6 w-6 text-gray-400" />
    </div>

    <Menu as="div" class="relative inline-block text-left" v-if="!editMode">
      <MenuButton as="template">
        <button class="rounded-full p-1.5 hover:bg-gray-500/20 focus:outline-none active:bg-gray-500/30">
          <DotsVerticalIcon class="h-5 text-gray-500" />
        </button>
      </MenuButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 isolate z-50 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-blue-500 text-white dark:text-blue-500' : 'text-gray-900 dark:text-gray-300',
                  'group flex w-full items-center rounded-md bg-white px-2 py-2 text-sm dark:bg-transparent',
                ]"
              >
                <CloudIcon
                  :class="[
                    'mr-2 h-5 w-5',
                    active ? 'text-white dark:text-blue-500' : 'text-blue-500 dark:text-gray-300',
                  ]"
                />
                Upload
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-blue-500 text-white dark:text-blue-500' : 'text-gray-900 dark:text-gray-300',
                  'group flex w-full items-center rounded-md bg-white px-2 py-2 text-sm dark:bg-transparent',
                ]"
              >
                <PencilIcon
                  :class="[
                    'mr-2 h-5 w-5',
                    active ? 'text-white dark:text-blue-500' : 'text-blue-500 dark:text-gray-300',
                  ]"
                />
                Edit
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
import IButton from '@/components/IButton'
import { CloudIcon, DotsVerticalIcon, PencilIcon } from '@heroicons/vue/solid'
import { TrashIcon, ViewListIcon } from '@heroicons/vue/outline'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useTasks } from '@/composables/useTasks'
import TaskButton from '@/components/Task/TaskButton'
import TaskDuration from '@/components/Task/TaskDuration'
import TaskFavorite from '@/components/Task/TaskFavorite'

const props = defineProps({ task: Object, editMode: Boolean })

const tasksStore = useTasks()

function start() {
  tasksStore.startTask(props.task)
}

function stop() {
  tasksStore.stopTask(props.task)
}

function deleteTask() {
  tasksStore.deleteTask(props.task)
}

function onPinChanged(pinned) {
  tasksStore.pinTask(props.task, pinned)
}
</script>
