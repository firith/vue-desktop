<template>
  <div class="flex items-center justify-between space-x-8 py-3 px-3">
    <label class="shrink-0 text-gray-800 dark:text-gray-300">Alapértelmezett aktivitás</label>
    <button class="flex items-center space-x-1 overflow-hidden text-gray-900" @click="openModal">
      <span class="truncate text-gray-800 dark:text-gray-300">
        {{ selectedLabel }}
      </span>
      <ChevronDownIcon class="h-6 w-6 shrink-0 text-gray-800 dark:text-gray-300" />
    </button>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-80" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform divide-y overflow-hidden rounded bg-white text-left align-middle text-gray-800 shadow-xl transition-all dark:bg-gray-800 dark:text-gray-300"
              >
                <DialogTitle as="h3" class="px-3 py-3 text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                  Alapértelmezett aktivitás
                </DialogTitle>
                <div class="h-80 overflow-scroll py-3 px-3 text-sm">
                  <button class="flex items-center space-x-4 py-2" @click="selected = null">
                    <span
                      :class="[
                        'block h-4 w-4 rounded-full ',
                        selected == null ? 'bg-blue-500' : 'border-2 border-gray-400',
                      ]"
                    ></span>
                    <span
                      :class="[
                        'flex items-center space-x-4 py-2',
                        selected == null ? 'text-blue-600' : 'text-gray-800 dark:text-gray-300',
                      ]"
                    >
                      Nincs beállítva
                    </span>
                  </button>
                  <button
                    v-for="activity in activities"
                    :key="activity.id"
                    :class="[
                      'flex items-center space-x-4 py-2',
                      activity.id == selected ? 'text-blue-600' : 'text-gray-800 dark:text-gray-300',
                    ]"
                    @click="selected = activity.id"
                  >
                    <span
                      :class="[
                        'block h-4 w-4 rounded-full ',
                        activity.id == selected ? 'bg-blue-500' : 'border-2 border-gray-400',
                      ]"
                    ></span>
                    <span>{{ activity.name }}</span>
                  </button>
                </div>

                <div class="flex justify-end space-x-2 px-3 py-3">
                  <IButton type="button" @click="dismiss" class="text-sm uppercase text-blue-600 hover:text-blue-800">
                    Cancel
                  </IButton>
                  <IButton
                    type="button"
                    @click="closeModal"
                    class="text-sm uppercase text-blue-600 hover:text-blue-800"
                  >
                    Ok
                  </IButton>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

import { ChevronDownIcon } from '@heroicons/vue/solid'
import IButton from '@/components/IButton'

const props = defineProps({ modelValue: [Number, String], activities: Array })
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const selected = ref(props.modelValue)

const selectedLabel = computed(() => {
  if (selected.value == null) {
    return 'Nincs kiválasztva'
  }

  return props.activities.find((each) => each.id == props.modelValue)?.name
})

function dismiss() {
  isOpen.value = false
}

function closeModal() {
  isOpen.value = false
  emit('update:modelValue', selected.value)
}

function openModal() {
  isOpen.value = true
  selected.value = props.modelValue
}
</script>
