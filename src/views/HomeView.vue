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
  <AppContent class="bg-confetti">
    <TaskList class="flex flex-col gap-5" />
  </AppContent>
</template>

<script setup>
import AppBar from '@/components/AppBar'
import IntrenLogo from '@/components/IntrenLogo'
import IButton from '@/components/IButton'
import CogIcon from '@/components/Icons/CogIcon'
import AppContent from '@/components/AppContent'
import TaskList from '@/components/Task/TaskList'
</script>
