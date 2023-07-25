<template>
  <!-- <div
    id="delete-confirmation-modal"
    ref="deleteConfirmationModal"
    aria-hidden="true"
    class="modal"
    tabindex="-1"
  > -->
  <!-- <div class="modal show">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="p-5 text-center">
            <XCircleIcon class="w-16 h-16 text-theme-6 mx-auto mt-3" />
            <div class="text-3xl mt-5"></div>
            <div class="text-gray-600 mt-2"></div>
          </div>
          <div class="px-5 pb-8 text-center">
            <button type="button" class="btn btn-outline-secondary w-24 mr-1"></button>
            <button type="button" class="btn btn-danger w-24"></button>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!-- </div> -->
  <h1>asdsadas</h1>
</template>

<script setup>
import { ref, reactive, computed, watch, defineProps, defineEmits, onMounted } from "vue";
// export default {
//   emits: ["onDeleteConfirm", "onCancel"],
//   methods: {
//     onDelete() {
//       this.$emit("onDeleteConfirm");
//     },
//     onCancel() {
//       this.$emit("onCancel");
//     },
//   },
// };
// const props = defineProps({
//   deleteModal: { type: Boolean, required: true, default: false },
// });

// onMounted(() => {
//   console.log("deleteModal", props.deleteModal);
// });

// watch(props.deleteModal, (deleteModal) => {
//   console.log("deleteModal....");
// if (props.deleteModal) {
//   this.$refs.deleteConfirmationModal;
//   console.log("refs", this.$refs.deleteConfirmationModal);
// }
// });
</script>

<style scoped>
.modal {
  margin: 0 !important;
}
</style>
