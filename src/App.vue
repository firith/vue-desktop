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
      <DurationSummary />
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import IntrenLogo from "@/components/IntrenLogo";
import IButton from "@/components/IButton";
import { CogIcon, PencilIcon } from "@heroicons/vue/solid";
import DurationSummary from "@/components/DurationSummary";

onMounted(() => {
  window.electronApi.onUpdateAvailable((event) =>
    console.log("available", { event })
  );
  window.electronApi.onUpdateDownloaded((event) =>
    console.log("downloaded", { event })
  );
});
</script>
