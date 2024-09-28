<template>
  <div class="manage-patients-container">
    <div class="form-container">
      <AddNewPatientForm />
    </div>
    <div class="list-container">
      <ListPatients :patients="patients" @edit-patient="handleEditPatient" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AddNewPatientForm from "./AddNewPatientForm.vue";
import ListPatients from "./ListPatients.vue";
// ... other imports and logic
</script>

<style scoped>
.manage-patients-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.form-container,
.list-container {
  width: 100%;
}
</style>
