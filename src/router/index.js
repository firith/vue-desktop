import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import { useSettings } from '@/composables/useSettings'

const routes = [
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import(/* webpackChunkName: "home" */ '../views/WelcomePage.vue'),
  },
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomeView,
  },
  {
    path: '/settings',
    name: 'settings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "setting" */ '../views/SettingsPage.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to) => {
  const settingsStorage = useSettings()

  if (!settingsStorage.settings.user_id && to.name !== 'welcome') {
    return { name: 'welcome' }
  }

  if (settingsStorage.settings.user_id && to.name === 'welcome') {
    return { name: 'home' }
  }

  return true
})

export default router
