<template>
  <el-breadcrumb :separator-icon="ArrowRight" v-if="routes.length > 0">
    <template v-for="route in routes">
      <el-breadcrumb-item
        :to="{ path: route.path }"
        v-if="route.path"
        :key="route.path"
      >
        {{ route.name }}
      </el-breadcrumb-item>
      <el-breadcrumb-item v-else :key="route.name">
        {{ route.name }}</el-breadcrumb-item
      >
    </template>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useBreadcrumbStore } from "@/store/breadcrumb";
import { ArrowRight } from "@element-plus/icons-vue";
const breadCrumbStore = useBreadcrumbStore();
const routes = computed(() => breadCrumbStore.getBreadcrumb || []);
</script>

<style>
.el-breadcrumb__separator {
  color: #303133;
}
</style>
