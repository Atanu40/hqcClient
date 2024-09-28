<template>
  <el-container class="layout-container">
    <el-aside :width="isCollapse ? '64px' : '200px'" class="sidebar">
      <el-menu
        default-active="dashboard"
        class="el-menu-vertical"
        :router="true"
        :collapse="isCollapse"
      >
        <el-menu-item index="/dashboard">
          <el-icon><Odometer /></el-icon>
          <template #title>Dashboard</template>
        </el-menu-item>
        <el-sub-menu index="/data-entry">
          <template #title>
            <el-icon><Edit /></el-icon>
            <span>Data Entry</span>
          </template>
          <el-menu-item index="/data-entry/manage-patients"
            >Manage Patients</el-menu-item
          >
          <el-menu-item index="/data-entry/patient-admission"
            >Patient Admission</el-menu-item
          >
          <el-menu-item index="/data-entry/catheter-form"
            >Catheter Form</el-menu-item
          >
          <el-menu-item index="/data-entry/central-line-form"
            >Central Line Form</el-menu-item
          >
          <el-menu-item index="/data-entry/ssi-form"
            >Surgical Site Infection Form</el-menu-item
          >
          <el-menu-item index="/data-entry/ventilator-infection-form"
            >Ventilator Associated Infection Form</el-menu-item
          >
        </el-sub-menu>
        <el-menu-item index="/medication-review">
          <el-icon><Notebook /></el-icon>
          <template #title>Medication Review</template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container class="main-container">
      <el-header class="top__bar__container">
        <div class="top__bar">
          <el-button @click="toggleSidebar" class="toggle-btn">
            <el-icon><Fold v-if="!isCollapse" /><Expand v-else /></el-icon>
          </el-button>
          <!-- HQC Patient Management System -->
          <CustomBreadCrumb />
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import CustomBreadCrumb from "@/components/shared/CustomBreadCrumb.vue";
import { ref } from "vue";
import {
  Odometer,
  Edit,
  Notebook,
  Fold,
  Expand,
} from "@element-plus/icons-vue";

const isCollapse = ref(false);

const toggleSidebar = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style scoped>
.layout-container {
  height: 100vh;
}
.el-menu {
  height: 100% !important;
}
.sidebar {
  background-color: #545c64;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  height: 100%;
}
.main-container {
  flex-direction: column;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
.toggle-btn {
  margin-right: 20px;
}
.top__bar {
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
