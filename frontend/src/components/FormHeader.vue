<template>
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
</template>

<script setup lang="ts">
import {toggleMic,micStatus} from '../composable/micHandler'

</script>