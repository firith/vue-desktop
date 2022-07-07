<template>
  <IButton
    flat
    round
    class="hover:bg-green-600/20 active:bg-green-600/30"
    v-if="task.pinned"
    @click="$emit('change', false)"
  >
    <CheckedIcon class="h-4 text-green-600" />
  </IButton>
  <IButton
    flat
    round
    class="hover:bg-green-600/20 active:bg-green-600/30"
    v-if="!task.pinned"
    @click="$emit('change', true)"
  >
    <UnCheckedIcon class="h-4 text-green-600" />
  </IButton>
</template>

<script setup>
import IButton from '@/components/IButton'
import { StarIcon as CheckedIcon } from '@heroicons/vue/solid'
import { StarIcon as UnCheckedIcon } from '@heroicons/vue/outline'

defineProps({ task: Object })
defineEmits(['change'])
</script>
