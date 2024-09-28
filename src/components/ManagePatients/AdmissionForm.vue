<template>
  <div class="admission-form">
    <h2>Create New Admission</h2>
    <el-form :model="form" :rules="rules" ref="formRef" label-width="120px">
      <!-- <el-form-item label="Patient" prop="patientId">
        <el-select
          v-model="form.patientId"
          filterable
          remote
          reserve-keyword
          placeholder="Please enter patient name or UHID"
          :remote-method="remoteMethod"
          :loading="loading"
        >
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="`${item.name} (UHID: ${item.uhid})`"
            :value="item.id"
          />
        </el-select>
      </el-form-item> -->
      <el-form-item
        label="Patient"
        prop="patientId"
        placeholder="Please enter patient name or UHID"
      >
        <el-input v-model="form.patientId" />
      </el-form-item>
      <el-form-item label="IPD No" prop="ipdNo">
        <el-input v-model="form.ipdNo" />
      </el-form-item>
      <el-form-item label="Admission Date" prop="admissionDateTime">
        <el-date-picker
          v-model="form.admissionDateTime"
          type="datetime"
          placeholder="Select Date and Time"
        />
      </el-form-item>
      <el-form-item label="Ward" prop="ward">
        <el-input v-model="form.ward" />
      </el-form-item>
      <el-form-item label="Bed" prop="bed">
        <el-input v-model="form.bed" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm"
          >Create Admission</el-button
        >
        <el-button @click="resetForm">Reset</el-button>
      </el-form-item>
    </el-form>
    <el-alert
      v-if="errorMessage"
      :title="errorMessage"
      type="error"
      :closable="false"
      show-icon
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import apiService from "@/services/api.service";
import type { Patient } from "@/types/Patient";
import type { Admission } from "@/types/Admission";
import { useAdmissionStore } from "@/store/admission";
const admissionStore = useAdmissionStore();

const formRef = ref<FormInstance>();
const loading = ref(false);
const options = ref<Patient[]>([]);

const form = reactive({
  patientId: null,
  ipdNo: "",
  admissionDateTime: "",
  ward: "",
  bed: "",
});

const rules: FormRules = {
  patientId: [
    { required: true, message: "Please select a patient", trigger: "change" },
  ],
  ipdNo: [{ required: true, message: "Please input IPD No", trigger: "blur" }],
  admissionDateTime: [
    {
      required: true,
      message: "Please select admission date and time",
      trigger: "change",
    },
  ],
  ward: [{ required: true, message: "Please input ward", trigger: "blur" }],
  bed: [{ required: true, message: "Please input bed", trigger: "blur" }],
};

const errorMessage = ref("");

const remoteMethod = async (query: string) => {
  if (query !== "") {
    loading.value = true;
    try {
      const response = await apiService.getPatients();
      const patients = response.data;
      options.value = patients.filter((patient: Patient) => {
        return (
          patient.name.toLowerCase().includes(query.toLowerCase()) ||
          patient.uhid.toLowerCase().includes(query.toLowerCase())
        );
      });
    } catch (error) {
      console.error("Error fetching patients:", error);
    } finally {
      loading.value = false;
    }
  } else {
    options.value = [];
  }
};

const submitForm = async () => {
  if (!formRef.value) return;
  errorMessage.value = ""; // Clear previous error messages
  await formRef.value.validate(async (valid, fields) => {
    if (valid) {
      try {
        const admissionData: Partial<Admission> = {
          patientId: form.patientId,
          ipdNo: form.ipdNo,
          admissionDateTime: form.admissionDateTime,
          ward: form.ward,
          bed: form.bed,
        };
        console.log("Sending admission data:", admissionData);
        await admissionStore.createAdmission(admissionData);
        await admissionStore.fetchAdmissions();
        resetForm();
      } catch (error) {
        console.error("Error creating admission:", error);
      }
    } else {
      console.error("Form validation failed:", fields);
    }
  });
};

const resetForm = () => {
  if (formRef.value) {
    formRef.value.resetFields();
  }
};
</script>
