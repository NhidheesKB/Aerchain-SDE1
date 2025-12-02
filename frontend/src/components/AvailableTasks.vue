<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <div class="flex-1 p-6 md:p-10">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">
        Available Tasks
      </h2>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(task, index) in tasks"
          :key="index"
          class="bg-white hover:cursor-pointer hover:shadow-amber-700 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
        >
          <h3 class="text-lg font-semibold text-blue-600 mb-2">
            {{ task.title }}
          </h3>

          <p class="text-gray-600 text-sm mb-1">{{ task.description }}</p>
          <p class="text-gray-600 text-sm mb-1">Status: {{ task.status }}</p>
          <p class="text-gray-600 text-sm mb-1">Due: {{ task.duedate }}</p>

          <span
            class="inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600"
          >
            Priority: {{ task.priority }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tasks = ref([
  {
    title: "Fix Login Issue",
    description: "Resolve the login API failure on production.",
    status: "In Progress",
    priority: "High",
    duedate: "2025-12-10"
  },
  {
    title: "Create Dashboard UI",
    description: "Design and develop the task dashboard layout.",
    status: "Pending",
    priority: "Medium",
    duedate: "2025-12-08"
  },
  {
    title: "Database Cleanup",
    description: "Remove unused tables and optimize indexes.",
    status: "Completed",
    priority: "Low",
    duedate: "2025-12-05"
  },
  {
    title: "Add Notifications",
    description: "Implement email notifications for task updates.",
    status: "In Progress",
    priority: "High",
    duedate: "2025-12-12"
  },
  {
    title: "Improve Mobile UI",
    description: "Enhance responsiveness for mobile devices.",
    status: "Pending",
    priority: "Low",
    duedate: "2025-12-15"
  }
])
</script>
