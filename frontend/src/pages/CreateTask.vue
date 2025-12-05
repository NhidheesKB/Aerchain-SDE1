<template>
  <div class="flex-1 flex items-center justify-center pt-4">
    <div class="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6 md:p-10">
      <FormHeader/>
      <form class="space-y-6" @submit.prevent="handleSubmit" autocomplete="off">
        <div v-for="(field, index) in formFields" :key="index" class="relative">
          <label :for="field.toLowerCase()" class="block text-gray-700 font-medium mb-2">
            Task {{ field.charAt(0).toUpperCase()+field.slice(1) }}
          </label>

          <input
            v-if="!['status', 'priority'].includes(field)"
            :type="field === 'due_date' ? 'date' : 'text'"  
            :id="field"
            :placeholder="`Enter the Task ${field}`"
            v-model="fields[field]"
            required
            class="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300
            focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-700 shadow-sm"
          />

          <select
            v-else
            :name="field"
            v-model="fields[field]"
            class="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300
            focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-700 shadow-sm"
          >
            <option disabled value="">Select the Priority</option>
            <option v-for="(value, index) in options[field]" :key="index">
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
import { apiRequestHandler,  options } from "../composable/helper";
import { fields, formFields } from "../composable/micHandler";
import { useRouter } from "vue-router";
import FormHeader from "../components/FormHeader.vue";
const route = useRouter()
async function handleSubmit() {
  try {
    const task:any={}
    formFields.forEach((field)=>task[field]=fields[field])
    const response = await apiRequestHandler("create",'POST',task)
    if (!response.ok) return alert("Failed to Create Task")
    route.push("/available-tasks");
  } catch (error) {
    console.log("errorin Create Task", error)

  }

}

</script>
