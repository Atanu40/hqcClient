import { fetchWrapper } from "@/utils/fetchWraper";
import { defineStore } from "pinia";

export const useMedicationStore = defineStore("medication", {
  state: () => ({
    medicationAuditErrorTypes: [] as any[],
    medications: [] as any[],
    medicationDetails: [] as any[],
  }),
  actions: {
    async fetchMedications() {
      try {
        const response = await fetchWrapper.get("/MedicationAudit");
        this.medications = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async createMedication(medication: any) {
      try {
        await fetchWrapper.post("/MedicationAudit", medication);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchMedicationDetails(id: number) {
      try {
        const response = await fetchWrapper.get(`/MedicationAudit/${id}`);
        this.medicationDetails = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async medicationAuditErrorTypes() {
      try {
        const response = await fetchWrapper.get("/MedicationAudit/errorTypes");
        this.medicationAuditErrorTypes = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    getMedications: (state) => state.medications,
    getMedicationDetails: (state) => state.medicationDetails,
    getMedicationAuditErrorTypes: (state) => state.medicationAuditErrorTypes,
  },
});
