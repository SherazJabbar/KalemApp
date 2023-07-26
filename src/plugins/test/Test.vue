<template>
  <div>
    <transition name="modal-transition">
      <div
        class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="transform translate-y-0 modal-animation">
          <div class="w-full max-w-lg relative mx-auto my-auto rounded-xl shadow-lg bg-white">
            <div>
              <div class="text-center px-3 pt-5 pb-3 flex-auto justify-center leading-6">
                <div class="flex place-content-center">
                  <img src="@/assets/cross-circle.svg" class="w-12 h-12" />
                </div>

                <h2 class="text-3xl font-medium py-3">Are you sure?</h2>
                <p class="text-sm font-medium text-gray-400 px-8">
                  Do you really want to delete these records?
                  <br />
                  This process cannot be undone.
                </p>
              </div>
              <div class="px-3 pt-3 pb-6 text-center space-x-4 md:block">
                <button
                  class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
                  @click="onCancel"
                >
                  Cancel
                </button>
                <button
                  class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md"
                  @click="onDelete"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['closeDeleteModal', 'deleteCallRecord'])

const onCancel = () => {
  emit('closeDeleteModal')
}
const onDelete = () => {
  emit('deleteCallRecord')
}
</script>

<style>
.modal-animation {
  animation: slideIn 1000ms ease-in-out;
}

@keyframes slideIn {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

.modal-transition-enter-active,
.modal-transition-leave-active {
  transition: opacity 1000ms, transform 300ms;
}

.modal-transition-enter, .modal-transition-leave-to /* .modal-transition-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
