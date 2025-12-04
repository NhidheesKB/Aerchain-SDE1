<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <div class="flex-1 p-6 md:p-10">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Task Board</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        <div class="bg-gray-50 rounded-xl p-4 shadow" v-for="(priority, index) in status" :key="index">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            {{ priority }}
          </h3>
          <draggable v-model="tasks[priority.split(' ').join('')]" group="tasks" :id="priority" :itemKey="priority"
            class="min-h-[200px]" @add="handleTaskChange">
            <div v-for="task in tasks[priority.split(' ').join('')]" :key="task.id" :id="task.id"
              class="bg-white rounded-lg shadow p-4 mb-4 hover:shadow-md transition cursor-pointer"
              @click="openEdit(task)">
              <h4 class="text-lg font-semibold text-blue-600">
                {{ task.title }}
              </h4>
              <p class="text-gray-600 text-sm">{{ task.description }}</p>
              <p class="text-gray-600 text-sm">
                Due: {{ new Date(task.due_date).toLocaleDateString() }}
              </p>
              <span class="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full" :class="priority == 'To Do'
                  ? 'bg-blue-100 text-blue-600'
                  : priority == 'In Progress'
                    ? 'bg-yellow-100 text-yellow-600'
                    : 'bg-green-100 text-green-600'
                ">
                Priority: {{ task.priority }}
              </span>
            </div>
          </draggable>
        </div>
      </div>

      <EditCard :task="selectedTask" :visible="showEdit" @save="updateTask" @cancel="closeEdit" @delete="deleteTask" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import {
  VueDraggableNext as draggable,
  type SortableEvent,
} from "vue-draggable-next";
import EditCard from "./EditCard.vue";
import { apiRequestHandler } from "../composable/helper";

const status = ["To Do", "In Progress", "Done"];
const tasks: Record<string, any> = reactive({
  ToDo: [],
  InProgress: [],
  Done: [],
});

const showEdit = ref(false);
const selectedTask = ref<any>({});

async function getTasks() {
  try {
    const response = await fetch("/api/task", { method: "GET" });
    if (!response.ok) return;
    const result: { data: any[] } = await response.json();
    result.data.forEach((task: any) => {
      switch (task.status) {
        case "To Do":
          tasks.ToDo.push(task);
          break;
        case "In Progress":
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

function openEdit(task: any) {
  selectedTask.value = { ...task };
  showEdit.value = true;
}

function closeEdit() {
  showEdit.value = false;
}

async function updateTask(updatedTask: any) {
  try {
    const res = await apiRequestHandler("update",'PUT',updatedTask)
    if (res.ok) {
      const list = tasks[updatedTask.status.split(" ").join("")];
      const idx = list.findIndex((t: any) => t.id === updatedTask.id);
      if (idx !== -1) list[idx] = updatedTask;
      showEdit.value = false;
    }
  } catch (error) {
    console.log("Update Task Error", error);
  }
}

async function deleteTask(task: any) {
  try {
    const id={id:task.id}
    const res = await apiRequestHandler('delete','DELETE',id)
    if (res.ok) {
      const list = tasks[task.status.split(" ").join("")];
      const idx = list.findIndex((t: any) => t.id === task.id);
      if (idx !== -1) list.splice(idx, 1);
      showEdit.value = false;
    }
  } catch (error) {
    console.log("Delete Task Error", error);
  }
}
async function handleTaskChange(event: SortableEvent) {
  const taskId = event.item.id
  const to = event.to.id
  const key = to.split(' ').join('')
  const updateTask: any[] = tasks[key]
  updateTask.forEach(task => {
    if (task.id == taskId) return task.status = to
    return
  })
  try {
    const body = {
      to,
      taskId,
    };
    const response = await apiRequestHandler('update-status','PUT',body)
    if (!response.ok) return;
  } catch (error) {
    console.log("drag UpdateError", error);
  }
}

getTasks();
</script>
