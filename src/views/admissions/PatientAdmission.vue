<template>
  <ContentWrap>
    <el-row :gutter="20">
      <el-col :span="20">
        <AdmissionForm />
      </el-col>
    </el-row>
    <AdmissionsList :admissions="admissions" />
  </ContentWrap>
</template>

<script lang="ts" setup>
import { ContentWrap } from "@/components/ContentWrap";
import AdmissionsList from "@/components/ManagePatients/AdmissionsList.vue";
import AdmissionForm from "@/components/ManagePatients/AdmissionForm.vue";
import { onMounted, computed } from "vue";
import { useBreadcrumbStore } from "@/store/breadcrumb";
import { useAdmissionStore } from "@/store/admission";
const admissionStore = useAdmissionStore();
const breadCrumbStore = useBreadcrumbStore();

const admissions = computed(() => admissionStore.getAdmissions || []);
const handleFetchAdmission = async () => {
  await admissionStore.fetchAdmissions();
};
onMounted(() => {
  breadCrumbStore.setBreadcrumb([
    { name: "Dashboard", path: "/" },
    { name: "Patient Admission", path: "/data-entry/patient-admission" },
  ]);
  handleFetchAdmission();
});
</script>
