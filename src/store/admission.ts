import { fetchWrapper } from "@/utils/fetchWraper";
import { defineStore } from "pinia";
import type { Admission } from "@/types/Admission";
export const useAdmissionStore = defineStore("admission", {
  state: () => {
    return {
      admissions: [] as Admission[],
      admissionDetails: {} as Admission,
    };
  },
  actions: {
    async fetchAdmissions() {
      try {
        const res = await fetchWrapper.get("/Patients/admission");
        this.admissions = res.data;
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    },
    async fetchAdmissionDetails(id: number) {
      try {
        const res = await fetchWrapper.get(`/Patients/admission/${id}`);
        this.admissionDetails = res.data;
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    },

    async createAdmission(admission: Partial<Admission>) {
      try {
        await fetchWrapper.post("/Patients/admission", admission);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    },

    async updateAdmission(id: number, admission: Partial<Admission>) {
      try {
        await fetchWrapper.put(`/Patients/admission/${id}`, admission);
      } catch (error) {
        console.error("Error updating Admission:", error);
      }
    },

    async deleteAdmission(id: number) {
      try {
        await fetchWrapper.delete(`/Patients/admission/${id}`);
      } catch (error) {
        console.error("Error deleting admission:", error);
      }
    },
  },
  getters: {
    getAdmissions(): Admission[] {
      return this.admissions || [];
    },
    getAdmissionDetails(): Admission {
      return this.admissionDetails || {};
    },
  },
});
