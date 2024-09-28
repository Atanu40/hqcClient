<template>
  <div class="admissions-list">
    <h2>Patients Admitted</h2>
    <el-table :data="admissions" style="width: 100%">
      <el-table-column prop="ipdNo" label="IPD No" width="120" />
      <el-table-column prop="patientName" label="Patient Name" width="200" />
      <el-table-column
        prop="admissionDateTime"
        label="Admission Date"
        width="180"
      />
      <el-table-column prop="ward" label="Ward" width="120" />
      <el-table-column prop="bed" label="Bed" width="80" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import type { Admission } from "@/types/Admission";

defineProps<{
  admissions: Admission[];
}>();
</script>
