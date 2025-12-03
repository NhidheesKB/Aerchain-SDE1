<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-50 flex justify-center items-center"
  >
    <div
      class="absolute inset-0 bg-white/30 backdrop-blur-sm"
      @click="cancel"
    ></div>
    <div
      class="relative bg-white p-8 w-full max-w-lg mx-auto rounded-lg shadow-lg z-10"
    >
      <h2 class="text-2xl font-bold text-gray-700 mb-6 text-center">
        Edit Task
      </h2>
      <div
        class="flex items-center mb-6"
        v-for="(field, index) in fields"
        :key="index"
      >
        <label class="w-24 mr-4 text-gray-500 text-right">{{ field }}</label>
        <input
          v-if="field === 'due_date'"
          v-model="due_date"
          type="date"
          class="border-b-2 border-gray-300 flex-1 py-2 outline-none placeholder-gray-400 focus:border-green-500"
        />
        <input
          v-else
          v-model="task[field]"
          type="text"
          class="border-b-2 border-gray-300 flex-1 py-2 outline-none placeholder-gray-400 focus:border-green-500"
          :placeholder="`Enter the ${field}`"
        />
      </div>
      <div class="text-right mt-8 flex justify-end gap-3">
        <button
          class="py-2 px-6 bg-green-500 text-white font-bold rounded hover:bg-green-600"
          @click="save"
        >
          Save
        </button>

        <button
          class="py-2 px-6 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          @click="cancel"
        >
          Cancel
        </button>

        <button
          class="py-2 px-6 bg-red-500 text-white rounded hover:bg-red-600"
          @click="remove"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps<{
  task: any;
  visible: boolean;
}>();
const fields = ["title", "description", "due_date", "priority"];
const emits = defineEmits<{
  (e: "save", task: any): void;
  (e: "cancel"): void;
  (e: "delete", task: any): void;
}>();
const due_date = computed({
  get() {
    return formatDate(props.task.due_date);
  },
  set(value: string) {
    props.task.due_date = value;
  },
});

function formatDate(date: any) {
  if (!date) return "";
  const d = new Date(date);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function save() {
  emits("save", { ...props.task });
}

function cancel() {
  emits("cancel");
}

function remove() {
  emits("delete", { ...props.task });
}
</script>
