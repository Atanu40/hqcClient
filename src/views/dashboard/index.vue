<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>Total Patients</span>
            </div>
          </template>
          <div class="card-content">
            <h2>{{ totalPatients }}</h2>
          </div>
        </el-card>
      </el-col>
      <!-- Add more cards for other statistics -->
    </el-row>
    <div ref="chartRef" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { useBreadcrumbStore } from "@/store/breadcrumb";

const totalPatients = ref(100); // Replace with actual data
const chartRef = ref<HTMLElement | null>(null);
const breadCrumbStore = useBreadcrumbStore();

onMounted(() => {
  if (chartRef.value) {
    const chart = echarts.init(chartRef.value);
    const option = {
      title: {
        text: "Patient Admissions",
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    };
    chart.setOption(option);
  }
  breadCrumbStore.setBreadcrumb([{ name: "Dashboard", path: "" }]);
});
</script>
