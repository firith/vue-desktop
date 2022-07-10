import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from '@/apollo-client'
import axios from 'axios'
import VueAxios from 'vue-axios'

const pinia = createPinia()

const app = createApp(App).use(VueAxios, axios).use(router).use(pinia)

app.provide(DefaultApolloClient, apolloClient)
app.provide('axios', app.config.globalProperties.axios)

app.mount('#app')
