import {  createRouter, createWebHistory } from 'vue-router'
import CreateTask from './components/CreateTask.vue'
import AvailableTasks from './components/AvailableTasks.vue'

const routes = [
  { path: '/', component: CreateTask },
  { path: '/available-tasks', component: AvailableTasks },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})