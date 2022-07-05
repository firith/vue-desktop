<template>
  <button
    :class="[
      'p-1.5 focus:outline-none',
      round ? 'rounded-full' : '',
      flat ? 'hover:bg-white/10 active:bg-white/20' : '',
    ]"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({ flat: Boolean, round: Boolean });
</script>
