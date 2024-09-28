<template>
  <ContentWrap>
    <h2>{{ isEditing ? "Edit Patient" : "Add New Patient" }}</h2>
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="120px"
    >
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="UHID" prop="uhid">
            <el-input v-model="formData.uhid" placeholder="Enter UHID" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="First Name" prop="firstName">
            <el-input
              v-model="formData.firstName"
              placeholder="Enter First Name"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="Last Name" prop="lastName">
            <el-input
              v-model="formData.lastName"
              placeholder="Enter Last Name"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Sex" prop="sex">
            <el-select v-model="formData.sex" placeholder="Select Sex">
              <el-option label="Male" value="Male" />
              <el-option label="Female" value="Female" />
              <el-option label="Other" value="Other" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="Date of Birth" prop="dateOfBirth">
            <el-date-picker
              v-model="formData.dateOfBirth"
              type="date"
              placeholder="Select Date of Birth"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit"
          >{{ isEditing ? "Update" : "Add" }} Patient</el-button
        >
        <el-button @click="handleReset">Reset</el-button>
      </el-form-item>
    </el-form>

    <div class="mt-20px">
      <ListPatients :patients="patients" @edit-patient="handleEditPatient" />
    </div>
  </ContentWrap>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import { useBreadcrumbStore } from "@/store/breadcrumb";
import { usePatientStore } from "@/store/patient";
import type { FormInstance, FormRules } from "element-plus";
import { ContentWrap } from "@/components/ContentWrap";
import ListPatients from "@/components/ManagePatients/ListPatients.vue";
import type { Patient } from "@/types/Patient";
import { computed } from "vue";
import { de } from "element-plus/es/locale/index.mjs";

const breadCrumbStore = useBreadcrumbStore();
const patientStore = usePatientStore();
const formRef = ref<FormInstance>();
const isEditing = ref(false);

const formData = reactive<Patient>({
  uhid: "",
  firstName: "",
  lastName: "",
  sex: "",
  dateOfBirth: "",
});

const formRules: FormRules = {
  uhid: [{ required: true, message: "Please input UHID", trigger: "blur" }],
  firstName: [
    { required: true, message: "Please input first name", trigger: "blur" },
  ],
  lastName: [
    { required: true, message: "Please input last name", trigger: "blur" },
  ],
  sex: [{ required: true, message: "Please select sex", trigger: "change" }],
  dateOfBirth: [
    {
      required: true,
      message: "Please select date of birth",
      trigger: "change",
    },
  ],
};

onMounted(async () => {
  await handleFetchPatients();
});

const patients = computed(() => patientStore.getPatients || []);

const handleFetchPatients = async () => {
  try {
    await patientStore.fetchPatients();
    // const response = await apiService.getPatients();
    // patients.value = response.data;
  } catch (error) {
    console.error("Error fetching patients:", error);
  }
};

const handleSubmit = async () => {
  if (!formRef.value) return;
  await formRef.value.validate(async (valid) => {
    if (valid) {
      if (isEditing.value && formData?.id) {
        await patientStore.updatePatient(formData.id, formData);
        isEditing.value = false;
      } else {
        await patientStore.createPatient(formData);
      }
      await patientStore.fetchPatients();
      handleReset();
    }
  });
};

const handleReset = () => {
  if (!formRef.value) return;
  formRef.value.resetFields();
  isEditing.value = false;
  if (formData?.id) {
    delete formData.id;
  }
};

const handleEditPatient = (patient: Patient) => {
  formData.id = patient.id;
  formData.uhid = patient.uhid;
  formData.firstName = patient.firstName;
  formData.lastName = patient.lastName;
  formData.sex = patient.sex;
  formData.dateOfBirth = patient.dateOfBirth;
  isEditing.value = true;
};

onMounted(() => {
  breadCrumbStore.setBreadcrumb([
    { name: "Dashboard", path: "/" },
    { name: "Manage Patients", path: "/data-entry/manage-patients" },
  ]);
});
</script>
