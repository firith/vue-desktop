import { defineStore } from 'pinia/dist/pinia.esm-browser'
import { useStorage } from '@vueuse/core/index'

export const usePlatform = defineStore('platform', {
  state: () => ({
    os: useStorage('os', 'win32'),
  }),
})
