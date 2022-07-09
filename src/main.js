import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from '@/apollo-client'

const pinia = createPinia()

createApp(App).provide(DefaultApolloClient, apolloClient).use(router).use(pinia).mount('#app')
