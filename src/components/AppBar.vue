<template>
  <header
    class="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 shadow-xl dark:from-blue-700 dark:to-blue-800"
  >
    <div class="flex items-center justify-between">
      <slot name="left" />

      <div class="flex items-center space-x-1">
        <slot name="right"></slot>
      </div>
    </div>
  </header>
</template>

<script setup></script>
