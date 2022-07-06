<template>
  <AppBar>
    <template #left> Beállítások</template>
    <template #right>
      <IButton round flat @click="$router.push('/')">
        <XIcon class="h-6 text-white" />
      </IButton>
    </template>
  </AppBar>
  <AppContent class="flex flex-col justify-between pb-4">
    <div class="divide-y py-2">
      <ActivitySelect v-model="activity" />
      <InputSwitch v-model="enabled" />
      <InputSwitch v-model="enabled" />
    </div>
    <div class="flex justify-center">
      <IButton class="px-4 text-sm uppercase text-red-500 hover:bg-red-500/10">
        Kijelentkezés
      </IButton>
    </div>
  </AppContent>
</template>

<script setup>
import { ref } from "vue";
import AppBar from "@/components/AppBar";
import IButton from "@/components/IButton";
import { XIcon } from "@heroicons/vue/solid";
import AppContent from "@/components/AppContent";
import InputSwitch from "@/components/Form/InputSwitch";
import ActivitySelect from "@/components/Form/ActivitySelect";

const enabled = ref(false);
const activity = ref(null);
</script>
