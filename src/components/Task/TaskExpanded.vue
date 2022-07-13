<template>
  <div>
    <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700" @click="$emit('minimize')">
      <MinimizeIcon class="w-4" />
    </button>
    <div class="absolute top-16 right-5 flex flex-col space-y-4">
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
        <button @click="$emit('stop')" v-if="task.running" class="text-blue-800 hover:text-blue-900">
          <PauseIcon class="w-16" />
        </button>
        <button @click="$emit('start')" v-if="!task.running" class="text-blue-800 hover:text-blue-900">
          <PlayIcon class="w-16" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import PinIcon from '@/components/Icons/PinIcon'
import UploadIcon from '@/components/Icons/UploadIcon'
import TrashIcon from '@/components/Icons/TrashIcon'
import MinimizeIcon from '@/components/Icons/MinimizeIcon'
import PlayIcon from '@/components/Icons/PlayIcon'
import PauseIcon from '@/components/Icons/PauseIcon'
import { useDuration } from '@/composables/useDuration'

defineProps({ task: Object, duration: Number })
defineEmits(['start', 'stop', 'minimize'])

const { formatDuration } = useDuration()
</script>
