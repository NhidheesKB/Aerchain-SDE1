<template>
  <div class="flex-1 flex items-center justify-center pt-4">
    <div class="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6 md:p-10">
      <h2 class="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-center">
        Add Task Details
      </h2>
      <form
        class="space-y-6"
        action="/api/create"
        method="POST"
        @submit.prevent="handleSubmit"
        autocomplete="off"
      >
        <div v-for="(field, index) in formFields" :key="index" class="relative">
          <label
            :for="field.toLowerCase()"
            class="block text-gray-700 font-medium mb-2"
          >
            Task {{ field }}
          </label>
          <input
            v-if="!['Status', 'Priority'].includes(field)"
            :type="field === 'Due date' ? 'date' : 'text'"
            :id="field.toLowerCase()"
            :name="field=='Due date'?'due_date':field.toLowerCase()"
            :placeholder="`Enter the Task ${field}`"
            required
            class="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 shadow-sm"
          />
          <select
            v-else
            :name="field.toLowerCase()"
            v-model="statusPriorityHandler[field.toLowerCase()]"
            class="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 shadow-sm"
          >
            <option disabled value="">Select the Priority</option>
            <option
              v-for="(value, index) in options[field.toLowerCase()]"
              :key="index"
            >
              {{ value }}
            </option>
          </select>
        </div>

        <button
          type="submit"
          class="w-full py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Create Tasks
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
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
const options: Record<string, string[]> = {
  priority: ["urgent", "high priority", "low priority", "critical"],
  status: ["To Do", "In Progress", "Done"],
};
function handleSubmit(e: Event) {
  console.log("data", e);
  const form = e.target as HTMLFormElement;
  form.submit();
}
</script>
