import { fetchWrapper } from "@/utils/fetchWraper";
import { defineStore } from "pinia";
import type { Patient } from "@/types/Patient";

export const usePatientStore = defineStore("patient", {
  state: () => {
    return {
      patients: [] as Patient[],
      patientDetails: {} as Patient,
    };
  },
  actions: {
    async fetchPatients() {
      try {
        const response = await fetchWrapper.get("/Patients/Patient");
        this.patients = response.data;
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    },
    async fetchPatientDetails(id: number) {
      try {
        const response = await fetchWrapper.get(`/Patients/Patient/${id}`);
        this.patientDetails = response.data;
      } catch (error) {
        console.error("Error fetching patient details:", error);
      }
    },
    async createPatient(patient: Patient) {
      try {
        await fetchWrapper.post("/Patients/Patient", patient);
      } catch (error) {
        console.error("Error creating patient:", error);
      }
    },
    async updatePatient(id: number, patient: Partial<Patient>) {
      try {
        await fetchWrapper.put(`/Patients/Patient/${id}`, patient);
      } catch (error) {
        console.error("Error updating patient:", error);
      }
    },
    async deletePatient(id: number) {
      try {
        await fetchWrapper.delete(`/Patients/Patient/${id}`);
      } catch (error) {
        console.error("Error deleting patient:", error);
      }
    },
  },
  getters: {
    getPatients(): Patient[] {
      return this.patients || [];
    },
    getPatientDetails(): Patient {
      return this.patientDetails || {};
    },
  },
});
