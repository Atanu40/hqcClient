<template>
  <div class="medication-review">
    <h1>Medication Review</h1>
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="auto"
      :label-position="'left'"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item label="UHID" prop="uhid">
            <el-select
              v-model="value"
              multiple
              filterable
              remote
              reserve-keyword
              placeholder="Please enter a keyword"
              :remote-method="remoteMethod"
              :loading="loading"
              style="width: 240px"
            >
              <el-option
                v-for="item in patients"
                :key="item.id"
                :label="`${item.firstName} ${item.lastName}`"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="First Name" prop="firstName">
            <el-input v-model="form.firstName" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!-- <PrescriptionAudit /> -->
  </div>
</template>

<script lang="ts" setup>
// import PrescriptionAudit from "@/components/Medication/PrescriptionAudit.vue";
import { useBreadcrumbStore } from "@/store/breadcrumb";
import { usePatientStore } from "@/store/patient";
import { useMedicationStore } from "@/store/medication";
import { computed, onMounted } from "vue";
import { ref } from "vue";
import type { FormInstance } from "element-plus";
const breadCrumbStore = useBreadcrumbStore();
const patientStore = usePatientStore();
const medicationStore = useMedicationStore();

const formRef = ref<FormInstance>();
const formSize = ref("default");
const value = ref<string[]>([]);
const options = ref<any[]>([]);

const form = ref<any>({
  uhid: "",
  firstName: "",
  lastName: "",
  sex: "",
  dateOfBirth: null as Date | null,
});

const loading = ref(false);
const list = ref<any[]>([]);

const remoteMethod = (query: string) => {
  if (query) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      options.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase());
      });
    }, 200);
  } else {
    options.value = [];
  }
};

const rules = ref<any>({
  uhid: [
    { required: true, message: "Please input UHID", trigger: "blur" },
    { min: 3, max: 50, message: "Length should be 3 to 50", trigger: "blur" },
  ],
  name: [
    { required: true, message: "Please input name", trigger: "blur" },
    { min: 3, max: 100, message: "Length should be 3 to 100", trigger: "blur" },
  ],
});

const patients = computed(() => patientStore.getPatients || []);
const medications = computed(() => medicationStore.getMedications || []);
const medicationAuditErrorTypes = computed(
  () => medicationStore.getMedicationAuditErrorTypes || []
);

const handleGetPatients = async () => {
  await patientStore.fetchPatients();
};

const handleGetMedications = async () => {
  await medicationStore.fetchMedications();
};

const handleGetMedicationAuditErrorTypes = async () => {
  await medicationStore.medicationAuditErrorTypes();
};

onMounted(async () => {
  breadCrumbStore.setBreadcrumb([
    { name: "Dashboard", path: "/" },
    { name: "Medication Review", path: "/data-entry/medication-review" },
  ]);

  await handleGetPatients();
  await handleGetMedications();
  await handleGetMedicationAuditErrorTypes();
});
</script>
