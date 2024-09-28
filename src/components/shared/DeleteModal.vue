<template>
  <el-dialog
    v-model="confirmDeleteDialogVisible"
    :title="title"
    width="500"
    center
  >
    <span>
      {{ message }}
    </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleCancelModal()">Cancel</el-button>
        <el-button type="danger" @click="handleConfirmModal()">
          Delete
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, defineExpose, defineProps, defineEmits } from "vue";

defineProps({
  title: {
    type: String,
    default: "Confirm Delete",
  },
  message: {
    type: String,
    default: "Are you sure you want to delete this item?",
  },
});
const emit = defineEmits(["confirm"]);

const confirmDeleteDialogVisible = ref(false);
const handleCancelModal = () => {
  confirmDeleteDialogVisible.value = false;
};
const handleConfirmModal = () => {
  confirmDeleteDialogVisible.value = false;
  emit("confirm");
};

defineExpose({
  handleCancelModal,
  handleConfirmModal,
  confirmDeleteDialogVisible,
});
</script>

<style lang="scss" scoped></style>
