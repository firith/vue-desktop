<template>
  <div class="relative">
    <button @click="open = !open">
      <DotsHorizontalIcon class="h-4 text-blue-800" />
    </button>
    <TransitionRoot :show="open">
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <button v-if="open" class="flex items-center justify-center rounded-full bg-gray-800 p-1 shadow-xl">
          <PinIcon class="h-4 w-4 text-white" />
        </button>
      </transition>
      <TransitionChild
        enter="transition-all duration-1000 delay-100 ease-out"
        enter-from="translate-x-0 translate-y-0 rotate-0"
        as="div"
        class="absolute top-0 right-0 flex origin-top-right -translate-x-8 translate-y-4 -rotate-45"
      >
        <button v-if="true" class="rotate-45 items-center justify-center rounded-full bg-gray-800 p-1 shadow-xl">
          <UploadIcon class="h-4 w-4 text-white" />
        </button>
      </TransitionChild>
      <button
        v-if="true"
        class="absolute top-0 right-0 flex translate-y-8 translate-x-2 items-center justify-center rounded-full bg-gray-800 p-1 shadow-xl"
      >
        <TrashIcon class="h-4 w-4 text-white" />
      </button>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DotsHorizontalIcon } from '@heroicons/vue/outline'
import PinIcon from '@/components/Icons/PinIcon'
import TrashIcon from '@/components/Icons/TrashIcon'
import UploadIcon from '@/components/Icons/UploadIcon'
import { TransitionRoot, TransitionChild } from '@headlessui/vue'

const open = ref(false)
</script>
