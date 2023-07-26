<template>
  <!-- <div
    id="delete-confirmation-modal"
    ref="deleteConfirmationModal"
    aria-hidden="true"
    class="modal"
    tabindex="-1"
  > -->
  <div class="modal show">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="p-5 text-center">
            <XCircleIcon class="w-16 h-16 text-theme-6 mx-auto mt-3" />
            <div class="text-3xl mt-5"></div>
            <div class="text-gray-600 mt-2">asdsad</div>
          </div>
          <div class="px-5 pb-8 text-center">
            <button type="button" class="btn btn-outline-secondary w-24 mr-1">
              sadsad
            </button>
            <button type="button" class="btn btn-danger w-24">asdasd</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup>
import { ref, reactive, computed, watch, defineProps, defineEmits, onMounted } from "vue";
// export default {
//   emits: ['onDeleteConfirm', 'onCancel'],
//   methods: {
//     onDelete() {
//       this.$emit('onDeleteConfirm')
//     },
//     onCancel() {
//       this.$emit('onCancel')
//     }
//   }
// }
// const props = defineProps({
//   deleteModal: { type: Boolean, required: true }
// })

// const deleteConfirmationModal = ref(null)

// onMounted(() => {
//   // console.log('mounted value', props.deleteModal)
// })

// watch(
//   () => props.deleteModal,
//   (newDeleteModal) => {
//     console.log('deleteModal changed:', newDeleteModal)
//     console.log('refs', deleteConfirmationModal.value)
//     deleteConfirmationModal.value.classList.add('show')
//   }
// )
</script>

<style scoped>
.modal {
  margin: 0 !important;
}
.modal {
  margin-top: -10000px;
  margin-left: -10000px;
  background: #000000a6;
  transition: visibility 0s linear 0.2s, opacity 0.2s 0s;
  height: 100vh;
  opacity: 0;
  position: fixed;
  top: 0px;
  left: 0px;
  visibility: hidden;
  width: 100vw;
}

.modal.modal-overlap {
  background: #000000a6;
}

.modal.modal-static .modal-content {
  -webkit-animation: modal-static-backdrop 0.3s infinite;
  animation: modal-static-backdrop 0.3s infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

.modal.show {
  transition: visibility 0s ease-in-out 0s, opacity 0.4s ease-in-out 0s;
  opacity: 1;
  visibility: visible;
}

.modal.show > .modal-dialog {
  margin-top: 4rem;
}

.modal .modal-dialog {
  width: 90%;
  transition: margin-top 0.4s;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
  margin-top: -4rem;
}

@media (min-width: 640px) {
  .modal .modal-dialog {
    width: 460px;
  }

  .modal .modal-dialog.modal-sm {
    width: 300px;
  }

  .modal .modal-dialog.modal-lg {
    width: 600px;
  }

  .modal .modal-dialog.modal-xl {
    width: 600px;
  }
}

@media (min-width: 1024px) {
  .modal .modal-dialog.modal-xl {
    width: 900px;
  }
}

.modal .modal-dialog .modal-content {
  position: relative;
}
</style>
