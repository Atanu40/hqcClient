<template>
  <div class="list-patients">
    <h2>Patient List</h2>
    <el-table :data="patients" style="width: 100%" border>
      <el-table-column prop="uhid" label="UHID" min-width="120" />
      <el-table-column label="Name" min-width="200">
        <template #default="{ row }">
          {{ `${row.firstName} ${row.lastName}` }}
        </template>
      </el-table-column>
      <el-table-column prop="sex" label="Sex" min-width="80" />
      <el-table-column label="Date of Birth" min-width="150">
        <template #default="{ row }">
          {{ formatDate(row.dateOfBirth) }}
        </template>
      </el-table-column>
      <el-table-column label="Actions" min-width="120">
        <template #default="{ row }">
          <el-button type="primary" size="small" @click="editPatient(row)"
            >Edit</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleShowDeleteModal(row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <DeleteModal ref="deleteModal" @confirm="handleDelete" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import DeleteModal from "@/components/shared/DeleteModal.vue";
import type { Patient } from "@/types/Patient";
import { usePatientStore } from "@/store/patient";

const patientStore = usePatientStore();
defineProps<{
  patients: Patient[];
}>();

const deleteModal = ref<any>(null);
const selectedPatient = ref<Patient | null>(null);

const handleShowDeleteModal = async (patient: Patient) => {
  if (patient && patient.id && deleteModal.value) {
    deleteModal.value.confirmDeleteDialogVisible = true;
    selectedPatient.value = patient;
    // await  patientStore.deletePatient(patient.id)
  }
};

const handleDelete = async () => {
  if (selectedPatient.value && selectedPatient.value.id) {
    await patientStore.deletePatient(selectedPatient.value.id);
    await patientStore.fetchPatients();
    selectedPatient.value = null;
  }
};

const emit = defineEmits(["edit-patient"]);

const editPatient = (patient: Patient) => {
  emit("edit-patient", patient);
};

const formatDate = (date: string | Date) => {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString();
};
</script>

<style scoped>
.list-patients {
  width: 100%;
  overflow-x: auto;
}
</style>
