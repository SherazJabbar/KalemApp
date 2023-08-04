<template>
  <div v-if="loading" class="loader-overlay">
    <div class="loader-background"></div>

    <div class="loader-spinner"></div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  loading: { type: Boolean, required: false }
})
</script>

<style>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.loader-spinner {
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
