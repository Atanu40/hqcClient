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
      <el-form-item label="Date of Admission">
        <el-input v-model="form.dateOfAdmission" disabled />
      </el-form-item>
      <el-form-item label="Date of Procedure">
        <el-input v-model="form.dateOfProcedure" disabled />
      </el-form-item>
  
      <!-- Event Details -->
      <el-form-item label="Event Type">
        <el-input v-model="form.eventType" />
      </el-form-item>
      <el-form-item label="Location">
        <el-input v-model="form.location" />
      </el-form-item>
      <el-form-item label="Date of Insertion">
        <el-date-picker v-model="form.dateOfInsertion" type="date" placeholder="Select date" />
      </el-form-item>
  
      <!-- Person Recording Insertion Practice Data -->
      <el-form-item label="Person Recording Insertion Practice Data">
        <el-radio-group v-model="form.insertionPracticeData">
          <el-radio label="Inserter">Inserter</el-radio>
          <el-radio label="Observer">Observer</el-radio>
        </el-radio-group>
      </el-form-item>
  
      <!-- Occupation of Inserter -->
      <el-form-item label="Occupation of Inserter">
        <el-checkbox-group v-model="form.occupationOfInserter">
          <el-checkbox label="Fellow" />
          <el-checkbox label="Medical student" />
          <el-checkbox label="Other student" />
          <el-checkbox label="Other medical staff" />
          <el-checkbox label="Physician assistant" />
          <el-checkbox label="Attending physician" />
          <el-checkbox label="Intern/resident" />
          <el-checkbox label="Registered nurse" />
          <el-checkbox label="Advanced practice nurse" />
          <el-checkbox label="Other" />
        </el-checkbox-group>
      </el-form-item>
  
      <!-- Was Inserter a Member of PICC/IV Team -->
      <el-form-item label="Was Inserter a Member of PICC/IV Team">
        <el-checkbox v-model="form.piccTeamMember" />
      </el-form-item>
  
      <!-- Reason for Insertion -->
      <el-form-item label="Reason for Insertion">
        <el-checkbox-group v-model="form.reasonForInsertion">
          <el-checkbox label="New indication for central line" />
          <el-checkbox label="Replace malfunctioning central line" />
          <el-checkbox label="Suspected central line-associated infection" />
          <el-checkbox label="Other" />
        </el-checkbox-group>
      </el-form-item>
  
      <!-- Maximal Sterile Barriers Used -->
      <el-form-item label="Maximal Sterile Barriers Used">
        <el-checkbox-group v-model="form.maximalSterileBarriers">
          <el-checkbox label="Mask" />
          <el-checkbox label="Sterile gown" />
          <el-checkbox label="Large sterile drape" />
          <el-checkbox label="Sterile gloves" />
          <el-checkbox label="Cap" />
        </el-checkbox-group>
      </el-form-item>
  
      <!-- Skin Preparation -->
      <el-form-item label="Skin Preparation">
        <el-checkbox-group v-model="form.skinPreparation">
          <el-checkbox label="Chlorhexidine gluconate" />
          <el-checkbox label="Povidone iodine" />
          <el-checkbox label="Alcohol" />
          <el-checkbox label="Other" />
        </el-checkbox-group>
      </el-form-item>
  
      <!-- Insertion Site -->
      <el-form-item label="Insertion Site">
        <el-checkbox-group v-model="form.insertionSite">
          <el-checkbox label="Femoral" />
          <el-checkbox label="Jugular" />
          <el-checkbox label="Lower extremity" />
          <el-checkbox label="Scalp" />
          <el-checkbox label="Subclavian" />
          <el-checkbox label="Umbilical" />
          <el-checkbox label="Upper extremity" />
        </el-checkbox-group>
      </el-form-item>
  
      <!-- Antimicrobial Coated Catheter Used -->
      <el-form-item label="Antimicrobial Coated Catheter Used">
        <el-checkbox v-model="form.antimicrobialCoatedCatheter" />
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
        eventType: '',
        location: '',
        dateOfInsertion: null,
        insertionPracticeData: '',
        occupationOfInserter: [],
        piccTeamMember: false,
        reasonForInsertion: [],
        maximalSterileBarriers: [],
        skinPreparation: [],
        insertionSite: [],
        antimicrobialCoatedCatheter: false,
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