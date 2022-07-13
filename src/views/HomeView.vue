<template>
  <AppBar>
    <template #middle>
      <IntrenLogo class="h-4" />
    </template>
    <template #right>
      <IButton round flat @click="$router.push('/settings')">
        <CogIcon class="h-6 w-6 text-white" />
      </IButton>
    </template>
  </AppBar>
  <AppContent class="relative bg-confetti p-3">
    <button
      class="fixed bottom-10 right-10 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-blue-800 shadow-xl"
    >
      <PlusIcon class="h-10 w-10 text-blue-50" />
    </button>
    <TaskList class="flex flex-col gap-3" />
  </AppContent>
  <AppFooter class="bg-zinc-50 shadow-inner"></AppFooter>
</template>

<script setup>
import AppBar from '@/components/AppBar'
import IntrenLogo from '@/components/IntrenLogo'
import IButton from '@/components/IButton'
import CogIcon from '@/components/Icons/CogIcon'
import AppContent from '@/components/AppContent'
import TaskList from '@/components/Task/TaskList'
import AppFooter from '@/components/AppFooter'
import { PlusIcon } from '@heroicons/vue/solid'
</script>
