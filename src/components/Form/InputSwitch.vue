<template>
  <SwitchGroup>
    <div class="flex items-center justify-between py-3 px-3">
      <SwitchLabel class="text-gray-800 dark:text-gray-300">{{ label }}</SwitchLabel>
      <div>
        <Switch
          :model-value="modelValue"
          @update:modelValue="$emit('update:modelValue', $event)"
          class="group relative inline-flex h-5 w-12 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none"
        >
          <span
            aria-hidden="true"
            :class="[
              modelValue ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700',
              'pointer-events-none absolute mx-auto h-4 w-9 rounded-full shadow-inner transition-colors duration-200 ease-in-out',
            ]"
          />
          <span
            aria-hidden="true"
            :class="[
              modelValue ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none absolute left-0 inline-block h-6 w-6 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out dark:border-gray-800 dark:bg-gray-600',
            ]"
          />
        </Switch>
      </div>
    </div>
  </SwitchGroup>
</template>

<script setup>
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

defineProps({ modelValue: Boolean, label: String })
defineEmits(['update:modelValue'])
</script>
