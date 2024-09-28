<template>
    <div class="prescription-audit">
      <el-select v-model="columnCount" placeholder="Select number of columns" @change="updateColumns">
        <el-option v-for="n in 20" :key="n" :label="`${n} columns`" :value="n" />
      </el-select>
  
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="sno" label="S.NO." width="60" />
        <el-table-column prop="name" label="Name of the Drug" width="250" />
        <el-table-column v-for="n in columnCount" :key="n" :label="`Drug ${n}`" width="100">
          <template #default="scope">
            <el-select v-model="scope.row[`drug${n}`]" placeholder="-" class="cell-select">
              <el-option label="-" value="-" />
              <el-option v-for="letter in 'ABCDEFGHI'" :key="letter" :label="letter" :value="letter" />
            </el-select>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, reactive, watch } from 'vue'
  
  const columnCount = ref(10)
  const tableData = reactive([
    { sno: '', name: 'DOCTORS', type: 'header' },
    { sno: '1', name: 'Incorrect drug selection' },
    { sno: '2', name: 'No/wrong dose' },
    { sno: '3', name: 'No/wrong unit' },
    { sno: '4', name: 'No/wrong frequency' },
    { sno: '5', name: 'No/wrong route' },
    { sno: '6', name: 'No/wrong concentration' },
    { sno: '7', name: 'No/wrong rate of administration' },
    { sno: '8', name: 'Illegible handwriting' },
    { sno: '9', name: 'Non-approved abbreviations used' },
    { sno: '10', name: 'Non-usage of capital letters for drug names' },
    { sno: '11', name: 'Non-usage of generic names' },
    { sno: '12', name: 'Non-modification of drug dose keeping in mind drug-drug interaction' },
    { sno: '13', name: 'Non-modification of time of drug administration/ dose/drug keeping in mind food drug interaction' },
    { sno: '', name: 'DOCTORS AND OR NURSES', type: 'header' },
    { sno: '14', name: 'Wrong formulation transcribed/indented' },
    { sno: '15', name: 'Wrong drug transcribed/indented' },
    { sno: '16', name: 'Wrong strength transcribed/indented' },
    { sno: '', name: 'PHARMACIST', type: 'header' },
    { sno: '17', name: 'Wrong drug dispensed' },
    { sno: '18', name: 'Wrong dose dispensed' },
    { sno: '19', name: 'Wrong formulation dispensed' },
    { sno: '20', name: 'Expired/Near-expiry drugs dispensed' },
    { sno: '21', name: 'No/wrong labelling' },
    { sno: '22', name: 'Delay in dispense > defined time' },
    { sno: '23', name: 'Generic or class substitute done without consultation with the prescribing doctor' },
    { sno: '', name: 'NURSES', type: 'header' },
    { sno: '24', name: 'Wrong Patient' },
    { sno: '25', name: 'Dose Omission' },
    { sno: '26', name: 'Improper Dose' },
    { sno: '27', name: 'Wrong Drug' },
    { sno: '28', name: 'Wrong Dosage Form' },
    { sno: '29', name: 'Wrong Route of Administration' },
    { sno: '30', name: 'Wrong Rate' },
    { sno: '31', name: 'Wrong Duration' },
    { sno: '32', name: 'Wrong Time*' },
    { sno: '33', name: 'No documentation of drug administration' },
    { sno: '34', name: 'Incomplete/ Improper documentation by nursing staff **' },
    { sno: '35', name: 'Documentation without administration' },
    { sno: '36', name: 'Others' },
  ])
  
  const updateColumns = () => {
    tableData.forEach(row => {
      for (let i = 1; i <= 20; i++) {
        if (i <= columnCount.value) {
          if (!row[`drug${i}`]) {
            row[`drug${i}`] = '-'
          }
        } else {
          delete row[`drug${i}`]
        }
      }
    })
  }
  
  watch(columnCount, updateColumns, { immediate: true })
  </script>
  
  <style scoped>
  .prescription-audit {
    margin-top: 20px;
  }
  .cell-select {
    width: 100%;
  }
  </style>