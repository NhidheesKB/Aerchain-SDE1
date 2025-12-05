import {  createRouter, createWebHistory } from 'vue-router'
import CreateTask from './pages/CreateTask.vue'
import AvailableTasks from './pages/AvailableTasks.vue'

const routes = [
  { path: '/', component: CreateTask },
  { path: '/available-tasks', component: AvailableTasks },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})