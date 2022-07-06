<template>
  <div class="flex items-center justify-between space-x-8 py-3 px-3">
    <label class="shrink-0 text-gray-800 dark:text-gray-300"
      >Alapértelmezett aktivitás</label
    >
    <button
      class="flex items-center space-x-1 overflow-hidden text-gray-900"
      @click="openModal"
    >
      <span class="truncate text-gray-800 dark:text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur,
        maiores!
      </span>
      <ChevronDownIcon
        class="h-6 w-6 shrink-0 text-gray-800 dark:text-gray-300"
      />
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
          <div
            class="fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-80"
          />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
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
                <DialogTitle
                  as="h3"
                  class="px-3 py-3 text-lg font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  Alapértelmezett aktivitás
                </DialogTitle>
                <div class="h-80 overflow-scroll py-3 px-3 text-sm">
                  <div class="flex cursor-pointer items-center space-x-4 py-2">
                    <div
                      class="h-4 w-4 rounded-full border-2 border-gray-400"
                    ></div>
                    <span>Nincs beállítva</span>
                  </div>
                  <div
                    class="flex cursor-pointer items-center space-x-4 py-2 text-blue-600"
                  >
                    <div class="h-4 w-4 rounded-full bg-blue-500"></div>
                    <span>Account management</span>
                  </div>
                  <div class="flex cursor-pointer items-center space-x-4 py-2">
                    <div
                      class="h-4 w-4 rounded-full border-2 border-gray-400"
                    ></div>
                    <span>Analytics szakértő</span>
                  </div>
                </div>

                <div class="flex justify-end space-x-2 px-3 py-3">
                  <IButton
                    type="button"
                    @click="closeModal"
                    class="uppercase text-blue-600 hover:text-blue-800"
                  >
                    Cancel
                  </IButton>
                  <IButton
                    type="button"
                    @click="closeModal"
                    class="uppercase text-blue-600 hover:text-blue-800"
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
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);

import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import { ChevronDownIcon } from "@heroicons/vue/solid";
import IButton from "@/components/IButton";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
}
</script>
