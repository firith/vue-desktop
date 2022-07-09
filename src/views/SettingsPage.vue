<template>
  <AppBar>
    <template #left> Beállítások</template>
    <template #right>
      <IButton round flat @click="$router.push({ name: 'home' })">
        <XIcon class="h-6 text-white" />
      </IButton>
    </template>
  </AppBar>
  <AppContent class="flex flex-col justify-between pb-4">
    <div class="divide-y py-2">
      <ActivitySelect
        :model-value="settingsStore.settings.default_activity"
        @update:model-value="updateSetting('default_activity', $event)"
        :activities="activitiesStore.activities"
      />
      <InputSwitch
        :model-value="settingsStore.settings.start_task_after_created"
        label="Időzítő automatikus elindítása"
        @update:model-value="updateSetting('start_task_after_created', $event)"
      />
      <InputSwitch
        v-model="enabled"
        :model-value="settingsStore.settings.delete_task_after_upload"
        label="Időzítő törlése feltöltés után"
        @update:model-value="updateSetting('delete_task_after_upload', $event)"
      />
    </div>
    <div class="flex justify-center">
      <IButton class="px-4 text-sm uppercase text-red-500 hover:bg-red-500/10"> Kijelentkezés</IButton>
    </div>
  </AppContent>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppBar from '@/components/AppBar'
import IButton from '@/components/IButton'
import { XIcon } from '@heroicons/vue/solid'
import AppContent from '@/components/AppContent'
import InputSwitch from '@/components/Form/InputSwitch'
import { useSettings } from '@/composables/useSettings'
import { useActivities } from '@/composables/useActivities'
import ActivitySelect from '@/components/Form/ActivitySelect'

const enabled = ref(false)

const settingsStore = useSettings()
const activitiesStore = useActivities()
onMounted(() => activitiesStore.load())

function updateSetting(key, value) {
  settingsStore.$patch((state) => (state.settings[key] = value))
}
</script>
