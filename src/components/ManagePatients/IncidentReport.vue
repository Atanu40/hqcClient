<template>
    <div class="incident-report">
      <h2>Report an Incident</h2>
      <div class="button-group">
        <el-button type="primary" @click="reportIncident('Catheter Insertion')">Catheter Insertion</el-button>
        <el-button type="primary" @click="reportIncident('Surgical Infection')">Surgical Infection</el-button>
        <el-button type="primary" @click="reportIncident('Ventilator Insertion')">Ventilator Insertion</el-button>
        <el-button type="primary" @click="reportIncident('Central Line Insertion')">Central Line Insertion</el-button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  const reportIncident = (incidentType: string) => {
    console.log(`Reporting incident: ${incidentType}`)
    // Implement the logic to report the incident
  }
  </script>
  
  <style scoped>
  .incident-report {
    margin-bottom: 20px;
  }
  .button-group {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  </style>