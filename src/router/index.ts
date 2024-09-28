import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Dashboard from '@/views/dashboard/index.vue';
import managePatients from '@/views/data-entry/managePatients.vue';
import patientAdmission from '@/views/admissions/PatientAdmission.vue';
import MedicationReview from '@/views/medication/medicationReview.vue';
import Layout from '../layout/LayoutComponent.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'data-entry',
        name: 'DataEntry',
        meta: { title: 'Data Entry', icon: 'Edit' },
        children: [
          {
            path: 'manage-patients',
            name: 'ManagePatients',
            component: managePatients,
            meta: { title: 'Manage Patients' }
          },
          {
            path: 'patient-admission',
            name: 'PatientAdmission',
            component: patientAdmission,
            meta: { title: 'Patient Admission' }
          },
          {
            path: 'catheter-form',
            name: 'CatheterForm',
            component: () => import('@/views/forms/catheterForm.vue'),
            meta: { title: 'Catheter Form' }
          },
          {
            path: 'central-line-form',
            name: 'CentralLineForm',
            component: () => import('@/views/forms/centralLineForm.vue'),
            meta: { title: 'Central Line Infection Form' }
          },
          {
            path: 'ssi-form',
            name: 'SSIForm',
            component: () => import('@/views/forms/surgicalSiteinfectionForm.vue'),
            meta: { title: 'Surgical Site Infection Form' }
          },
          {
            path: 'ventilator-infection-form',
            name: 'VentilatorInfectionForm',
            component: () => import('@/views/forms/ventilatorForm.vue'),
            meta: { title: 'Ventilator AssociatedInfection Form' }
          }
        ]
      },
      {
        path: 'medication-review',
        name: 'MedicationReview',
        component: MedicationReview,
        meta: { title: 'Medication Review' }
      }
    ]
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router