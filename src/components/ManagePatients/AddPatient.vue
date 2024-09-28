<template>
    <div class="add-patient">
      <h2>{{ patient ? 'Edit Patient' : 'Add New Patient' }}</h2>
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
      >
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="UHID" prop="uhid">
              <el-input v-model="form.uhid" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="First Name" prop="firstName">
              <el-input v-model="form.firstName" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Last Name" prop="lastName">
              <el-input v-model="form.lastName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Sex" prop="sex">
              <el-select v-model="form.sex" placeholder="Select Sex">
                <el-option label="Male" value="Male" />
                <el-option label="Female" value="Female" />
                <el-option label="Other" value="Other" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Date of Birth" prop="dateOfBirth">
              <el-date-picker
                v-model="form.dateOfBirth"
                type="date"
                placeholder="Select Date of Birth"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)">
            {{ patient ? 'Update' : 'Add' }} Patient
          </el-button>
          <el-button @click="resetForm(formRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import type { Patient } from '@/types/Patient'

const props = defineProps<{
  patient?: Patient
}>()

const emit = defineEmits(['submit', 'update:patient'])

const formRef = ref<FormInstance>()
const formSize = ref('default')

const form = reactive({
  uhid: '',
  firstName: '',
  lastName: '',
  sex: '',
  dateOfBirth: null as Date | null
})

const rules = reactive<FormRules>({
  uhid: [
    { required: true, message: 'Please input UHID', trigger: 'blur' },
    { min: 3, max: 50, message: 'Length should be 3 to 50', trigger: 'blur' },
  ],
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' },
    { min: 3, max: 100, message: 'Length should be 3 to 100', trigger: 'blur' },
  ],
})

const isEditing = ref(false)

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  isEditing.value = false
}

watch(() => props.patient, (newPatient) => {
  if (newPatient) {
    Object.assign(form, newPatient)
    isEditing.value = true
  } else {
    resetForm(formRef.value)
    isEditing.value = false
  }
}, { immediate: true })

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      try {
        if (isEditing.value) {
          const response = await apiService.updatePatient(props.patient!.id, form)
          emit('patient-updated', response.data)
        } else {
          const response = await apiService.addPatient(form)
          emit('patient-added', response.data)
        }
        resetForm(formEl)
      } catch (error) {
        console.error('Error submitting patient:', error)
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>