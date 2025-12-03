<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <div class="flex-1 p-6 md:p-10">

      <h2 class="text-2xl font-bold text-gray-800 mb-6">
        Task Board
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gray-50 rounded-xl p-4 shadow" v-for="(priority, index) in status" :key=index>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">{{ priority }}</h3>
          <draggable v-model="tasks[priority.split(' ').join('')]" group="tasks" :id="priority" :itemKey="priority"
            class="min-h-[200px]" @add="handleTaskChange">
            <div v-for="task in tasks[priority.split(' ').join('')]" :key="task.title" :id="task.title"
              class="bg-white rounded-lg shadow p-4 mb-4 hover:shadow-md transition cursor-pointer">
              <h4 class="text-lg font-semibold text-blue-600">{{ task.title }}</h4>
              <p class="text-gray-600 text-sm">{{ task.description }}</p>
              <p class="text-gray-600 text-sm">Due: {{ new Date(task.due_date).toLocaleDateString() }}</p>
              <span class="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full" :class="priority == 'To Do'
                ? 'bg-blue-100 text-blue-600'
                : priority == 'In Progress'
                  ? 'bg-yellow-100 text-yellow-600'
                  : 'bg-green-100 text-green-600'">
                Priority: {{ task.priority }}
              </span>
            </div>
          </draggable>

        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { VueDraggableNext as draggable, type SortableEvent } from 'vue-draggable-next';

const status = ['To Do', 'In Progress', 'Done']
const tasks: Record<string, any> = reactive({ ToDo: [], InProgress: [], Done: [] })
async function getTasks() {
  try {
    const response = await fetch('/api/task', {
      method: 'GET',
      credentials: 'include'
    });

    if (!response.ok) return;

    const result: { data: any[] } = await response.json();

    result.data.forEach((task: any) => {
      switch (task.status) {
        case 'To Do':
          tasks.ToDo.push(task);
          break;
        case 'In Progress':
          tasks.InProgress.push(task);
          break;
        default:
          tasks.Done.push(task);
      }
    });

  } catch (error) {
    console.log("getTasks Error", error);
  }
}


function handleTaskChange(event: SortableEvent) {
  console.log("to", event.to.id)
  console.log("event", event.item.id)

}
getTasks()
</script>