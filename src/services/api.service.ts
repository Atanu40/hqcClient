import axios, { AxiosError } from "axios";
import type { Patient } from "@/types/Patient";
import type { Admission } from "@/types/Admission";

const apiClient = axios.create({
  baseURL: "http://localhost:5174/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  async getPatients() {
    return await apiClient.get<Patient[]>("/Patients");
  },
  addPatient(
    patient: Omit<Patient, "id" | "createdAt" | "modifiedAt">
  ): Promise<Patient> {
    return apiClient
      .post<Patient>("/Patients", patient)
      .then((response) => response.data);
  },
  updatePatient(id: number, patient: Partial<Patient>): Promise<Patient> {
    return apiClient
      .put<Patient>(`/Patients/${id}`, patient)
      .then((response) => response.data);
  },
  async getAdmissions() {
    return await apiClient.get<Admission[]>("/Patients/admission");
  },
  // Add this new method
  async createAdmission(admission: Partial<Admission>) {
    try {
      console.log("API service sending admission data:", admission);
      const response = await apiClient.post<Admission>(
        "/Patients/admission",
        admission
      );
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.error("Axios error:", axiosError.message);
        console.error("Response data:", axiosError.response?.data);
        console.error("Response status:", axiosError.response?.status);
        console.error("Response headers:", axiosError.response?.headers);
      } else {
        console.error("Unexpected error:", error);
      }
      throw error;
    }
  },
};
