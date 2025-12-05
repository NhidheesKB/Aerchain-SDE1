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
        <label class="w-24 mr-4 text-gray-500 text-right">
          {{
            field === "due_date"
              ? "Due Date"
              : field.charAt(0).toUpperCase() + field.slice(1)
          }}
        </label>
        <input
          v-if="field === 'due_date'"
          v-model="due_date"
          type="date"
          class="border-b-2 border-gray-300 flex-1 py-2 outline-none placeholder-gray-400 focus:border-green-500"
        />
        <select
          v-else-if="field === 'priority' || field === 'status'"
          v-model="task[field]"
          class="border-b-2 border-gray-300 flex-1 py-2 outline-none placeholder-gray-400 focus:border-green-500"
        >
          <option disabled value="">Select the {{ field }}</option>
          <option
            v-for="(option, index) in options[field]"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
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
          v-for="(button, index) in buttons"
          :key="index"
          :class="`py-2 px-6 ${button.class}`"
          @click="button.action"
        >
          {{ button.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { formatDate, options } from "../composable/helper";

const props = defineProps<{
  task: any;
  visible: boolean;
}>();
const fields = ["title", "description", "due_date", "priority"];
const buttons = [
  {
    action: save,
    class: "bg-green-500 text-white font-bold rounded hover:bg-green-600",
    label: "Save",
  },
  {
    action: cancel,
    class: "bg-gray-300 text-gray-700 rounded hover:bg-gray-400",
    label: "Cancel",
  },
  {
    action: remove,
    class: "bg-red-500 text-white rounded hover:bg-red-600",
    label: "Delete",
  },
];
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
