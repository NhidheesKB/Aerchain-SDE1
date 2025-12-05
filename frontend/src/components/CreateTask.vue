<template>
  <div class="flex-1 flex items-center justify-center pt-4">
    <div class="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6 md:p-10">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl md:text-3xl font-bold text-blue-600 sm:ml-40">
          Add Task Details
        </h2>
        <div class="relative flex items-center justify-center" @click="toggleMic">
          <div v-if="micStatus" class="absolute w-15 h-15 rounded-full bg-red-400 opacity-30 animate-ping"></div>

          <button
            class="relative z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition duration-300"
            :class="micStatus ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-500 hover:bg-gray-400'">
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 14 0h-2zM11 19h2v3h-2v-3z" />
            </svg>
          </button>
        </div>
      </div>
      <form class="space-y-6" @submit.prevent="handleSubmit" autocomplete="off">
        <div v-for="(field, index) in formFields" :key="index" class="relative">
          <label :for="field.toLowerCase()" class="block text-gray-700 font-medium mb-2">
            Task {{ field }}
          </label>

          <input
            v-if="!['Status', 'Priority'].includes(field)"
            :type="field === 'Due date' ? 'date' : 'text'"  
            :id="field.toLowerCase()"
            :name="field === 'Due date' ? 'due_date' : field.toLowerCase()"
            :placeholder="`Enter the Task ${field}`"
            required
            class="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300
            focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-700 shadow-sm"
          />

          <select
            v-else
            :name="field.toLowerCase()"
            v-model="statusPriorityHandler[field.toLowerCase()]"
            class="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300
            focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-700 shadow-sm"
          >
            <option disabled value="">Select the Priority</option>
            <option v-for="(value, index) in options[field.toLowerCase()]" :key="index">
              {{ value }}
            </option>
          </select>
        </div>

        <button
          type="submit"
          class="w-full py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg
          hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Create Tasks
        </button>
      </form>

    </div>
  </div>
</template>


<script setup lang="ts">
import { reactive, ref } from "vue";
import { apiRequestHandler,  options } from "../composable/helper";
import { micStatus, toggleMic } from "../composable/micHandler";
import { useRouter } from "vue-router";
const route = useRouter()
const formFields = ref([
  "Title",
  "Description",
  "Status",
  "Priority",
  "Due date",
]);
const statusPriorityHandler: Record<string, string> = reactive({
  priority: "",
  status: "To Do",
});

async function handleSubmit(e: Event) {
  try {
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const task: any = {};
    formData.forEach((value, key) => {
      task[key] = value;
    });
    task.status = statusPriorityHandler.status;
    task.priority = statusPriorityHandler.priority;
    const response = await apiRequestHandler("create",'POST',task)
    if (!response.ok) return alert("Failed to Create Task")
    route.push("/available-tasks");
  } catch (error) {
    console.log("errorin Create Task", error)

  }

}

</script>
