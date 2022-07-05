<template>
  <div class="flex h-screen flex-col bg-white">
    <header
      class="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 shadow-xl dark:from-blue-700 dark:to-blue-800"
    >
      <div class="flex items-center justify-between">
        <IntrenLogo class="h-5" />

        <div class="flex items-center space-x-1">
          <IButton round flat>
            <PencilIcon class="h-6 text-white" />
          </IButton>

          <IButton round flat>
            <CogIcon class="h-6 text-white" />
          </IButton>
        </div>
      </div>
    </header>

    <div class="flex-1">
      <router-view />
    </div>

    <footer
      class="sticky bottom-0 space-y-3 border-t border-t-gray-300 bg-gray-100 p-4 shadow-inner dark:border-t-gray-700 dark:bg-gray-900"
    >
      <div class="text-sm text-gray-800 dark:text-gray-300">
        Összesen: <strong>3:00</strong> (Timer: <strong>01:00</strong> +
        Redmine: <strong>02:00</strong>)
      </div>
      <div class="h-2 rounded-full bg-gray-300 shadow-inner dark:bg-gray-700">
        <div class="h-2 rounded-full bg-red-500" style="width: 40%"></div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import IntrenLogo from "@/components/IntrenLogo";
import IButton from "@/components/IButton";

import { CogIcon, PencilIcon } from "@heroicons/vue/solid";

onMounted(() => {
  window.electronApi.onUpdateAvailable((event) =>
    console.log("available", { event })
  );
  window.electronApi.onUpdateDownloaded((event) =>
    console.log("downloaded", { event })
  );
});
</script>
