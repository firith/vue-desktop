<template>
  <IButton
    v-if="!task.running"
    flat
    round
    class="p-0 hover:bg-blue-600/20 active:bg-blue-600/30"
    @click="$emit('start')"
  >
    <PlayIcon class="h-10 text-blue-600" />
  </IButton>
  <IButton
    v-if="task.running"
    flat
    round
    class="p-0 hover:bg-red-600/20 active:bg-red-600/30"
    @click="$emit('stop')"
  >
    <PauseIcon class="h-10 text-red-600" />
  </IButton>
</template>

<script setup>
import IButton from "@/components/IButton";
import { PlayIcon } from "@heroicons/vue/solid";
import { PauseIcon } from "@heroicons/vue/outline";

defineProps({ task: Object });
defineEmits(["start", "stop"]);
</script>
