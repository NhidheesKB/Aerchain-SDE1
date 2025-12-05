<template>
  <div v-if="isProcessing" class="flex flex-col items-center absolute top-10  mt-3">
    <svg class="animate-spin h-5 w-5 end-38 absolute text-blue-600 mb-1" viewBox="0 0 24 24">
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8z"
      ></path>
    </svg>
    <span class="text-blue-600 text-sm animate-pulse whitespace-nowrap">
      AI is generating task…
    </span>
  </div>
</template>

<script setup lang="ts">
import {isProcessing} from '../composable/micHandler'
</script>