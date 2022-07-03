<template>
  <div class="flex flex-col bg-white h-screen">
    <header class="sticky top-0 bg-gradient-to-r from-blue-500 to-blue-600 py-4 px-4 shadow-lg">
<!--      <img src="/images/intren.png" alt="">-->test
    </header>
    <div class="flex-1">
    <router-view />
    </div>
    <footer class="sticky bottom-0 bg-slate-200 shadow-inner py-4 min-h-[3rem]">

    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  window.electronApi.onUpdateAvailable((event) => console.log('available', {event}));
  window.electronApi.onUpdateDownloaded((event) => console.log('downloaded', {event}));
});


</script>
