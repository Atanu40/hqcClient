<template>
    <el-form :model="form" label-width="200px">
      <!-- Patient Selection -->
      <el-form-item label="Select Patient">
        <el-select v-model="form.selectedPatient" placeholder="Select Patient">
          <el-option
            v-for="patient in patients"
            :key="patient.uhid"
            :label="`${patient.name} (${patient.uhid})`"
            :value="patient.uhid"
          />
        </el-select>
      </el-form-item>
  
      <!-- Patient Details (Read-only) -->
      <el-form-item label="Patient's Name">
        <el-input v-model="form.patientName" disabled />
      </el-form-item>
      <el-form-item label="UHID No.">
        <el-input v-model="form.uhid" disabled />
      </el-form-item>
      <el-form-item label="Date of Procedure">
        <el-input v-model="form.dateOfProcedure" disabled />
      </el-form-item>
  
      <!-- Event Details -->
      <el-form-item label="Date Admitted to Facility">
        <el-date-picker v-model="form.dateAdmitted" type="date" placeholder="Select date" />
      </el-form-item>
      <el-form-item label="Location of Mechanical Ventilation Initiation">
        <el-input v-model="form.ventilationLocation" />
      </el-form-item>
      <el-form-item label="Date Initiated">
        <el-date-picker v-model="form.dateInitiated" type="date" placeholder="Select date" />
      </el-form-item>
  
      <!-- Specific Event -->
      <el-form-item label="Specific Event">
        <el-checkbox-group v-model="form.specificEvent">
          <el-checkbox label="VAC" />
          <el-checkbox label="IVAC" />
          <el-checkbox label="PVAP" />
        </el-checkbox-group>
      </el-form-item>
  
      <!-- Step 1: VAC -->
      <el-form-item label="Step 1: VAC">
        <el-checkbox-group v-model="form.vacCriteria">
          <el-checkbox label="Daily min FiO₂ increase ≥ 0.20 for ≥ 2 days" />
          <el-checkbox label="Daily min PEEP increase ≥ 3 cm H₂O for ≥ 2 days" />
        </el-checkbox-group>
      </el-form-item>
  
      <!-- Step 2: IVAC -->
      <el-form-item label="Step 2: IVAC">
        <el-checkbox-group v-model="form.ivacCriteria">
          <el-checkbox label="Temperature > 38°C or < 36°C" />
          <el-checkbox label="White blood cell count ≥ 12,000 or ≤ 4,000 cells/mm³" />
          <el-checkbox label="New antimicrobial agent started, continued for ≥ 4 days" />
        </el-checkbox-group>
      </el-form-item>
  
      <!-- Step 3: PVAP -->
      <el-form-item label="Step 3: PVAP">
        <el-checkbox-group v-model="form.pvapCriteria">
          <el-checkbox label="Positive culture of specified specimens" />
          <el-checkbox label="Purulent respiratory secretions plus organism identified" />
          <el-checkbox label="Positive tests for specified pathogens" />
        </el-checkbox-group>
      </el-form-item>
  
      <!-- Secondary Bloodstream Infection -->
      <el-form-item label="Secondary Bloodstream Infection">
        <el-checkbox v-model="form.secondaryBloodstreamInfection" />
      </el-form-item>
  
      <!-- Discharge Date (Read-only) -->
      <el-form-item label="Discharge Date">
        <el-input v-model="form.dischargeDate" disabled />
      </el-form-item>
  
      <!-- COVID-19 -->
      <el-form-item label="COVID-19">
        <el-checkbox v-model="form.covid19" />
      </el-form-item>
    </el-form>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const form = ref({
        selectedPatient: '',
        patientName: '',
        uhid: '',
        dateAdmitted: null,
        ventilationLocation: '',
        dateInitiated: null,
        specificEvent: [],
        vacCriteria: [],
        ivacCriteria: [],
        pvapCriteria: [],
        secondaryBloodstreamInfection: false,
        dischargeDate: '',
        covid19: false,
      });
  
      const patients = [
        { name: 'John Doe', uhid: '12345' },
        { name: 'Jane Smith', uhid: '67890' },
        // Add more patient data as needed
      ];
  
      return { form, patients };
    }
  };
  </script>
  
  <style scoped>
  .el-form-item {
    margin-bottom: 20px;
  }
  </style>