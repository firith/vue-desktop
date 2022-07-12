<template>
  <div>
    <div
      :class="[
        'h-auto overflow-hidden rounded-lg bg-green-200 p-5 shadow transition-all duration-200 ease-in-out',
        task.running ? 'max-h-72' : 'max-h-28',
      ]"
    >
      <div class="flex items-center gap-4" v-if="!task.running">
        <div class="flex min-w-0 flex-1 flex-col dark:text-gray-300">
          <div class="mb-3 overflow-hidden truncate font-medium text-zinc-800">
            DEV - accenthotels.com [ReWork v3,4,5] (Accent Hotel Solutions Kft.)
          </div>
          <div class="mb-2 overflow-hidden truncate text-xs text-blue-800 underline">
            #18119 Alternatív foglalómotoros eset (12Révay - Globres)
          </div>
          <div class="truncate text-xs font-light text-zinc-700">Alternatív foglalómotor implementálása</div>
        </div>
        <div class="font-mono text-sm text-blue-800">{{ formatDuration(task.duration, true) }}</div>
        <div class="relative h-6">
          <div class="absolute -top-7">
            <DotsHorizontalIcon class="w-6 text-blue-600" />
          </div>
          <button @click="start">
            <PlayIcon class="h-6 text-blue-800" />
          </button>
        </div>
      </div>

      <div class="relative" v-else>
        <div class="absolute top-5 right-0 flex flex-col space-y-4">
          <button>
            <PinIcon class="h-5 text-blue-800" />
          </button>
          <button>
            <UploadIcon class="h-4 w-4 text-blue-800" />
          </button>
          <button>
            <TrashIcon class="h-4 w-4 text-red-400" />
          </button>
        </div>
        <div class="flex justify-center pt-12 font-mono text-4xl text-blue-800">
          {{ formatDuration(duration, true) }}
        </div>

        <div class="mt-16 flex items-center gap-8">
          <div class="flex min-w-0 flex-1 flex-col dark:text-gray-300">
            <div class="mb-2 overflow-hidden truncate font-medium text-zinc-800">
              DEV - accenthotels.com [ReWork v3,4,5] (Accent Hotel Solutions Kft.)
            </div>
            <div class="mb-4 overflow-hidden truncate text-xs text-blue-800 underline">
              #18119 Alternatív foglalómotoros eset (12Révay - Globres)
            </div>
            <div>
              <input
                type="text"
                value="Alternatív foglalómotor implementálása"
                class="w-full max-w-md rounded border-none bg-[#fafafa]/80 px-3 py-2.5 text-xs font-light text-zinc-700 shadow-sm"
              />
            </div>
          </div>
          <div>
            <button @click="stop" class="text-blue-800 hover:text-blue-900">
              <PauseIcon class="w-16" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DotsHorizontalIcon } from '@heroicons/vue/outline'
import PlayIcon from '@/components/Icons/PlayIcon'
import PinIcon from '@/components/Icons/PinIcon'
import PauseIcon from '@/components/Icons/PauseIcon'
import UploadIcon from '@/components/Icons/UploadIcon'
import TrashIcon from '@/components/Icons/TrashIcon'
import { useTasks } from '@/composables/useTasks'
import { useDuration } from '@/composables/useDuration'
import { useIntervalFn } from '@vueuse/core/index'
import TaskMenu from '@/components/Task/TaskMenu'

const props = defineProps({ task: Object })
const { formatDuration } = useDuration()
const { resume, pause } = useIntervalFn(() => (duration.value = props.task.duration), 1000)

const taskStore = useTasks()
const duration = ref(props.task.duration)

function start() {
  taskStore.startTask(props.task)
  resume()
}

function stop() {
  taskStore.stopTask(props.task)
  pause()
}
</script>
