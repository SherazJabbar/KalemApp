<template>
  <div
    id="delete-confirmation-modal"
    ref="deleteConfirmationModal"
    aria-hidden="true"
    class="modal"
    tabindex="-1"
  >
    <!-- <div v-if="deleteModal" class="modal"> -->
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="p-5 text-center">
            <XCircleIcon class="w-16 h-16 text-theme-6 mx-auto mt-3" />
            <div class="text-3xl mt-5"></div>
            <div class="text-gray-600 mt-2">asdsad</div>
          </div>
          <div class="px-5 pb-8 text-center">
            <button type="button" class="btn btn-outline-secondary w-24 mr-1">sadsad</button>
            <button type="button" class="btn btn-danger w-24">asdasd</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup>
import { ref, reactive, computed, watch, defineProps, defineEmits, onMounted } from 'vue'
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
const props = defineProps({
  deleteModal: { type: Boolean, required: true }
})

const deleteConfirmationModal = ref(null)

// onMounted(() => {
//   // console.log('mounted value', props.deleteModal)
// })

watch(
  () => props.deleteModal,
  (newDeleteModal) => {
    console.log('deleteModal changed:', newDeleteModal)
    console.log('refs', deleteConfirmationModal.value)
    deleteConfirmationModal.value.classList.add('show')
  }
)
</script>

<style scoped>
.modal {
  margin: 0 !important;
}
</style>
