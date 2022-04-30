import { createRouter, createWebHistory } from 'vue-router'
import Calendar from '../views/Calendar.vue'
import Chart from '../views/Chart.vue'
import Settings from '../views/Settings.vue'

const routes = [
  { path: '/', name: 'calendar', component: Calendar },
  { path: '/chart', name: 'chart', component: Chart },
  { path: '/settings', name: 'settings', component: Settings }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
