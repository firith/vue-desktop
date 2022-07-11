<template>
  <div>
    <div class="rounded-lg bg-green-200 p-5 shadow" v-if="!task.running">
      <div class="flex items-center gap-4">
        <div class="flex min-w-0 flex-1 flex-col dark:text-gray-300">
          <div class="mb-1 overflow-hidden truncate font-medium text-zinc-800">
            DEV - accenthotels.com [ReWork v3,4,5] (Accent Hotel Solutions Kft.)
          </div>
          <div class="mb-2 overflow-hidden truncate text-xs text-blue-800 underline">
            #18119 Alternatív foglalómotoros eset (12Révay - Globres)
          </div>
          <div class="truncate text-xs font-light text-zinc-700">Alternatív foglalómotor implementálása</div>
        </div>
        <div class="font-mono text-sm text-blue-800">02:34:27</div>
        <div class="flex flex-col items-center space-y-2 self-start">
          <button>
            <DotsHorizontalIcon class="h-4 text-blue-800" />
          </button>
          <button @click="start">
            <PlayIcon class="h-6 text-blue-800" />
          </button>
        </div>
      </div>
    </div>
    <div class="relative rounded-lg bg-green-200 p-5 shadow" v-else>
      <div class="absolute top-5 right-5 flex flex-col space-y-4">
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
      <div class="flex justify-center pt-12 font-mono text-4xl text-blue-800">02:34:27</div>

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
        <div class="-mr-3.5">
          <button @click="stop" class="text-blue-800 hover:text-blue-900">
            <PauseIcon class="w-16" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { DotsHorizontalIcon } from '@heroicons/vue/outline'
import PlayIcon from '@/components/Icons/PlayIcon'
import PinIcon from '@/components/Icons/PinIcon'
import PauseIcon from '@/components/Icons/PauseIcon'
import UploadIcon from '@/components/Icons/UploadIcon'
import TrashIcon from '@/components/Icons/TrashIcon'
import { useTasks } from '@/composables/useTasks'

const props = defineProps({ task: Object })

const taskStore = useTasks()

function start() {
  taskStore.startTask(props.task)
}

function stop() {
  taskStore.stopTask(props.task)
}
</script>
