import { defineStore } from 'pinia/dist/pinia.esm-browser'
import { useStorage } from '@vueuse/core'

const INITIAL_STATE = {
  default_activity: null,
  delete_task_after_upload: false,
  start_task_after_created: false,
}

export const useSettings = defineStore('settings', {
  state: () => ({
    settings: useStorage('settings', INITIAL_STATE, undefined, {
      serializer: {
        read: (v) => (v ? { ...INITIAL_STATE, ...JSON.parse(v) } : {}),
        write: (v) => JSON.stringify(v),
      },
    }),
  }),
})
