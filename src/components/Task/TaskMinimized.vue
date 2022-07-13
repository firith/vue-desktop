<template>
  <div>
    <div class="mb-3 mt-1 flex items-center justify-between space-x-4">
      <div class="truncate font-medium text-zinc-800">
        DEV - accenthotels.com [ReWork v3,4,5] (Accent Hotel Solutions Kft.)
      </div>
      <button class="absolute top-2 right-2" @click="$emit('expand')">
        <MaximizeIcon class="w-4 text-blue-800" />
      </button>
    </div>
    <div class="mb-2 flex items-center justify-between space-x-4">
      <div class="truncate text-xs text-blue-800 underline">
        #18119 Alternatív foglalómotoros eset (12Révay - Globres)
      </div>
      <div class="flex items-center space-x-4">
        <div class="font-mono text-sm text-blue-800">{{ formatDuration(duration, true) }}</div>
        <button @click="$emit('start')" v-if="!task.running">
          <PlayIcon class="h-5 text-blue-800" />
        </button>
        <button @click="$emit('stop')" v-if="task.running">
          <PauseIcon class="h-5 text-blue-800" />
        </button>
      </div>
    </div>
    <div class="truncate text-xs font-light text-zinc-700">Alternatív foglalómotor implementálása</div>
  </div>
</template>

<script setup>
import PlayIcon from '@/components/Icons/PlayIcon'
import PauseIcon from '@/components/Icons/PauseIcon'
import MaximizeIcon from '@/components/Icons/MaximizeIcon'
import { useDuration } from '@/composables/useDuration'

defineProps({ task: Object, duration: Number })
defineEmits(['start', 'stop', 'expand'])

const { formatDuration } = useDuration()
</script>
