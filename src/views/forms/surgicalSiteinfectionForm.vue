<template>
    <el-form :model="form" label-width="180px">
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
      <el-form-item label="Date of Admission">
        <el-input v-model="form.dateOfAdmission" disabled />
      </el-form-item>
      <el-form-item label="Date of Procedure">
        <el-input v-model="form.dateOfProcedure" disabled />
      </el-form-item>
  
      <!-- Event Details -->
      <el-form-item label="Date Admitted to Facility">
        <el-date-picker v-model="form.dateAdmitted" type="date" placeholder="Select date" />
      </el-form-item>
      <el-form-item label="Location">
        <el-input v-model="form.location" />
      </el-form-item>
  
      <!-- Specific Event -->
      <el-form-item label="Specific Event">
        <el-checkbox-group v-model="form.specificEvent">
          <el-checkbox label="Superficial Incisional Primary (SIP)" />
          <el-checkbox label="Deep Incisional Primary (DIP)" />
          <el-checkbox label="Superficial Incisional Secondary (SIS)" />
          <el-checkbox label="Deep Incisional Secondary (DIS)" />
          <el-checkbox label="Organ/Space" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Organ/Space Details">
        <el-input v-model="form.organSpaceDetails" placeholder="Specify site" />
      </el-form-item>
  
      <!-- Infection Present -->
      <el-form-item label="Infection Present at Time of Surgery (PATOS)">
        <el-checkbox v-model="form.infectionPresent" />
      </el-form-item>
  
      <!-- Specify Criteria -->
      <el-form-item label="Specify Criteria">
        <el-checkbox-group v-model="form.specifyCriteria">
          <el-checkbox label="Drainage or material" />
          <el-checkbox label="Pain or tenderness" />
          <el-checkbox label="Swelling or inflammation" />
          <el-checkbox label="Fever" />
          <!-- Add more criteria as needed -->
        </el-checkbox-group>
      </el-form-item>
  
      <!-- Detected -->
      <el-form-item label="Detected">
        <el-checkbox-group v-model="form.detected">
          <el-checkbox label="A (During admission)" />
          <el-checkbox label="P (Post-discharge surveillance)" />
          <el-checkbox label="RF (Readmission to facility)" />
          <el-checkbox label="RO (Readmission other than where procedure performed)" />
        </el-checkbox-group>
      </el-form-item>
  
      <!-- Secondary Bloodstream Infection -->
      <el-form-item label="Secondary Bloodstream Infection">
        <el-checkbox v-model="form.secondaryBloodstreamInfection" />
      </el-form-item>
  
      <!-- Discharge Date -->
      <el-form-item label="Discharge Date">
        <el-date-picker v-model="form.dischargeDate" type="date" placeholder="Select date" />
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
        dateOfAdmission: '',
        dateOfProcedure: '',
        dateAdmitted: null,
        location: '',
        specificEvent: [],
        organSpaceDetails: '',
        infectionPresent: false,
        specifyCriteria: [],
        detected: [],
        secondaryBloodstreamInfection: false,
        dischargeDate: null,
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